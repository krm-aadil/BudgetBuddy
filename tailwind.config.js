import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {},
  },
  plugins: [],
});