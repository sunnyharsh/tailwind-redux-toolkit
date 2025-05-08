import "tailwindcss/tailwind.css";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import formJson from "./data.json";
import { validationSchema } from "./validationSchema";

const OrderForm = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section: any) => {
    setOpenSection(openSection === section ? null : section);
  };

  const initialValues = formJson.groups.reduce((acc: any, group: any) => {
    group.fields.forEach((field: any) => {
      acc[field.name] = "";
    });
    return acc;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values, "sdsdf"); // handle form submission
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-lg mx-auto mt-10">
          {formJson.groups.map((group: any, groupIndex: any) => (
            <div key={groupIndex} className=" border-gray-300 mb-4">
              <div className="p-4 space-y-4">
                {group.fields.map((field: any, fieldIndex: any) => (
                  <div key={fieldIndex}>
                    <label className="block text-gray-700">{field.label}</label>
                    {field.type === "dropdown" ? (
                      <Field
                        as="select"
                        name={field.name}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      >
                        <option value="">Select a {field.label}</option>
                        {field.options.map((option: any, optionIndex: any) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    ) : (
                      <Field
                        type={field.type}
                        name={field.name}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      />
                    )}
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-black py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
