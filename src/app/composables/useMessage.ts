import useNotification from './useNotification'


export default function useMessage() {
  const { toastAdd } = useNotification();
  
  function toastError(summary: string, detail: string): void {
    toastAdd('error', summary, detail)
  }

  function toastSuccess(summary: string, detail: string): void {
    toastAdd('success', summary, detail)
  }

  function toastInfo(summary: string, detail: string): void {
    toastAdd('info', summary, detail)
  }

  function toastWarn(summary: string, detail: string): void {
    toastAdd('warn', summary, detail)
  }

  return {
    toastError,
    toastSuccess,
    toastInfo,
    toastWarn,
  }
}
