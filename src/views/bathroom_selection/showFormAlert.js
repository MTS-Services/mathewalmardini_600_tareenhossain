import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const base = {
  background: "#f3efe6",
  color: "#1e1d24",
  confirmButtonColor: "#2D6B7A",
  buttonsStyling: true,
  heightAuto: false,
  customClass: {
    popup: "bsf-swal",
    title: "bsf-swal-title",
    confirmButton: "bsf-swal-btn",
  },
  showClass: {
    popup: "bsf-swal-in",
    backdrop: "bsf-swal-backdrop-in",
  },
  hideClass: {
    popup: "bsf-swal-out",
    backdrop: "bsf-swal-backdrop-out",
  },
};

export function showFormError(message) {
  return Swal.fire({
    ...base,
    icon: "error",
    iconColor: "#b45309",
    title: "Almost there",
    text: message,
    confirmButtonText: "OK",
  });
}

export function showFormSuccess(message) {
  return Swal.fire({
    ...base,
    icon: "success",
    iconColor: "#2D6B7A",
    title: "Sent",
    text: message,
    confirmButtonText: "OK",
  });
}
