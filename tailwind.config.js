/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.{js,jsx,ts,tsx}", "src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins_Regular"],
        poppinsBold: ["Poppins_Bold"],
        poppinsSemiBold: ["Poppins_SemiBold"],
        poppinsMedium: ["Poppins_Medium"],
        poppinsBlack: ["Poppins_Black"],
        poppinsExtraBold: ["Poppins_ExtraBold"],
        poppinsLight: ["Poppins_Light"],
        poppinsItalic: ["Poppins_Italic"],
        poppinsExtraLight: ["Poppins_ExtraLight"],
        poppinsThin: ["Poppins_Thin"],
      }
    },
  },
  plugins: [],
}

