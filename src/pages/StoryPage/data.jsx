// src/data/formFields.js

export const StoryPageUiFileds = [
  {
    id: "fileInput",
    type: "file",
    label: "Upload File",
    value: "",
         // Placeholder for onChange handler
    accept: ".pdf,.docx,.png,.jpg",
    multiple: false,
    required: false,
    // placeholder: "Drag & Drop Your File",
  },
  {
    id: "ProductTitle",
    type: "text",
    label: "Title",
    value: "",
         // Placeholder for onChange handler
    required: true,
    // placeholder: "Enter project title",
  },
  {
    id: "productCode",
    type: "text",
    label: "Product Code",
    value: "",
         // Placeholder for onChange handler
    required: true,
    // placeholder: "Describe the project Code",
  },
 
  {
    id: "StoryDescription",
    type: "textarea",
    rows:1,
    label: "Description",
    value: "",
         // Placeholder for onChange handler
    required: true,
    // placeholder: "Enter detailed Description",
  },
  
];


export const StoryPageButtonData = [
   {
    id: "StoragecancelButton",
    type: "button",
    border: "2px solid #85803c",
    text: "Cancel",
    color:"#85803c",
    backgroundColor: "white", // Red color
    marginTop: 0,
  },

   {
    id: "StoragesubmitButton",
    type: "button",
    text: "Submit",
    backgroundColor: "#85803c", // Green color
    marginTop: 0,
  },
 
]