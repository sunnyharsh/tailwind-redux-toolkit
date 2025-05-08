import * as Yup from "yup";
// // Helper function to create Yup validation schema dynamically

// export const createValidationSchema: any = (groups: any) => {
//   const shape: any = {};

//   groups.forEach((group: any) => {
//     group.fields.forEach((field: any) => {
//       let validator = Yup.string();

//       if (field.validation.required) {
//         validator = validator.required(`${field.label} is required`);
//       }

//       if (field.validation.min) {
//         validator = validator.min(
//           field.validation.min,
//           `${field.label} must be at least ${field.validation.min} characters`
//         );
//       }

//       if (field.validation.email) {
//         validator = validator.email("Invalid email address");
//       }

//       shape[field.name] = validator;
//     });
//   });

//   return Yup.object().shape(shape);
// };
export const validationSchema = Yup.object({
  productName: Yup.string()
    .required("product name is required")
    .min(5, "product name must be at least 5 characters long"),
  quantity: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters long"),
  // .max(45, ""),
  description: Yup.string().required("Description is required"),
});
