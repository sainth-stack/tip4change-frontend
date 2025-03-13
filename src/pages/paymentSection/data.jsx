export const formFields = {
    personalDetails: [
      { id: "title", type: "text", label: "Title" },
      { id: "firstName", type: "text", label: "First Name", sm: 4 },
      { id: "lastName", type: "text", label: "Last Name", sm: 4 },
      { id: "phoneNumber", type: "number", label: "Phone Number", sm: 4 },
    ],
    contactDetails: [
      { id: "email", type: "email", label: "E-mail", sm: 4 },
      { id: "theirEmail", type: "email", label: "Their E-mail", sm: 4 },
      { id: "inHonorOf", type: "text", label: "In Honor of", sm: 4 },
    ],
    addressDetails: [
      {
        id: "nationality",
        type: "select",
        label: "Nationality",
        placeholder:"select",
        options: [
          { label: "Select", value: "" },
          { label: "USA", value: "usa" },
          { label: "UK", value: "uk" },
        ],
        sm: 4,
      },
      {
        id: "country",
        type: "select",
        label: "Country",
        placeholder:"select",
        options: [
          { label: "Select", value: "" },
          { label: "India", value: "india" },
          { label: "Germany", value: "germany" },
        ],
        sm: 4,
      },
      { id: "city", type: "text", label: "City", sm: 4 },
    ],
  };