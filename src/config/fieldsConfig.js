export const fieldsConfig = [
  { name: "vehicleID", label: "Vehicle ID", type: "text", required: false },
  {
    name: "make",
    label: "Make",
    type: "select",
    options: ["Toyota", "Honda"],
    required: true,
  },
  {
    name: "model",
    label: "Model",
    type: "select",
    options: ["Corolla", "Civic"],
    required: true,
  },
  { name: "type", label: "Type", type: "select", options: ["type1", "type2"], required: true },
  { name: "year", label: "Year", type: "select", options: ["2000","2001"], required: true },
  {
    name: "registrationNo",
    label: "Registration No",
    type: "text",
    required: true,
  },

  {
    name: "color",
    label: "Color",
    type: "select",
    options: ["Red", "Blue"],
    required: true,
  },
  {
    name: "fuelType",
    label: "Fuel Type",
    type: "select",
    options: ["Petrol", "Diesel"],
    required: true,
  },

  {
    name: "transmission",
    label: "Transmission",
    type: "select",
    options: ["Petrol", "Diesel"],
    required: true,
  },
  { name: "odometer", label: "Odometer (KMPH)", type: "text", required: true },
  { name: "passengers", label: "Passengers", type: "select",options: [4,5,6], required: true },
  {
    name: "country",
    label: "Country",
    type: "select",
    options: ["Pakistan", "India"],
    required: true,
  },
  {
    name: "city",
    label: "City",
    type: "select",
    options: ["Lahore", "Peshawar","Delhi"],
    required: true,
  },
];
