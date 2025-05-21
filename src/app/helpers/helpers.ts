import useMessage from '@/app/composables/useMessage'

export default class Helper {
  private toastSuccess: (summary: string, detail: string) => void
  private toastError: (summary: string, detail: string) => void

  constructor() {
    const { toastError, toastSuccess } = useMessage()
    this.toastError = toastError
    this.toastSuccess = toastSuccess
  }

  copyToClipboard(toCopy: string) {
    if (!navigator.clipboard) {
      this.toastError(
        'Clipboard API not supported',
        'Your browser does not support the Clipboard API.'
      )
      return
    } else {
      const textToCopy = toCopy
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          this.toastSuccess('Copied to clipboard', textToCopy)
        })
        .catch((error) => {
          this.toastError(
            'Failed to copy',
            'An error occurred while copying to clipboard: ' + error
          )
        })
    }
  }
}
