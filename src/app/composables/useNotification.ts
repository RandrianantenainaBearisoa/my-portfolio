import { useToast } from 'primevue/usetoast';


export default function useNotification() {
  const toast = useToast();
  
  function toastAdd(severity: string, summary: string, detail: string): void {
    toast.add({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 3000,
    })
  }

  return {
    toastAdd,
  };
}
