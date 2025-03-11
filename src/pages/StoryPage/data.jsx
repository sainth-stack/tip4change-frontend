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
    placeholder: "Drag & Drop Your File",
  },
  {
    id: "title",
    type: "text",
    label: "Title",
    value: "",
         // Placeholder for onChange handler
    required: true,
    placeholder: "Enter project title",
  },
  {
    id: "projectGoal",
    type: "text",
    label: "Project Goal",
    value: "",
         // Placeholder for onChange handler
    required: true,
    placeholder: "Describe the project goal",
  },
  {
    id: "paymentBudget",
    type: "text",
    label: "Payment Budget",
    value: "",
         // Placeholder for onChange handler
    required: true,
    placeholder: "Enter budget",
  },
  {
    id: "description",
    type: "textarea",
    label: "Description",
    value: "",
         // Placeholder for onChange handler
    required: true,
    placeholder: "Enter detailed description",
  },
  
];


export const StoryPageButtonData = [
   {
    id: "cancelButton",
    type: "button",
    text: "Cancel",
    color:"#85803c",
    backgroundColor: "white", // Red color
    marginTop: 0,
  },

   {
    id: "submitButton",
    type: "button",
    text: "Submit",
    backgroundColor: "#85803c", // Green color
    marginTop: 0,
  },
 
]