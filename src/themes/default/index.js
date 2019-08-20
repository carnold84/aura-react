const colors = {
  primary1: "#7f226b",
  primary2: "#a73a8f",
  theme1: "#ffffff",
  theme2: "#f9f9f9",
  theme3: "#f2f2f2",
  theme4: "#dddddd",
  theme5: "#cccccc",
  text1: "#222222",
  text2: "#555555",
  text3: "#777777",
  textAlt1: "#ffffff",
  textAlt2: "#cccccc",
  textAlt3: "#999999",
  errorText: "#821717"
};

export default {
  appBar: {
    bgColor: colors.theme1,
    borderColor: colors.theme3,
    menu: {
      menuItem: {
        _hover: {
          color: colors.primary1
        },
        _active: {
          color: colors.primary1
        },
        color: colors.text1
      }
    }
  },
  appBody: {
    bgColor: colors.theme2
  },
  colors,
  button: {
    _focus: {
      bgColor: colors.theme1,
      borderColor: colors.primary1,
      color: colors.text1,
      outlineColor: colors.theme5
    },
    _hover: {
      bgColor: colors.theme2,
      borderColor: colors.theme5,
      color: colors.text1
    },
    _primary: {
      _hover: {
        bgColor: colors.primary2,
        borderColor: colors.primary1,
        color: colors.textAlt1
      },
      bgColor: colors.primary1,
      borderColor: colors.primary1,
      color: colors.textAlt1
    },
    bgColor: colors.theme1,
    borderColor: colors.theme4,
    color: colors.text3
  },
  drawer: {
    bgColor: colors.theme1,
    borderColor: colors.theme3,
    header: {
      bgColor: colors.theme1,
      borderColor: colors.theme3
    },
    title: {
      color: colors.text1
    }
  },
  iconButton: {
    _focus: {
      bgColor: colors.theme2,
      borderColor: colors.theme3,
      color: colors.text1,
      outlineColor: colors.theme5
    },
    _hover: {
      bgColor: "transparent",
      color: colors.text1
    },
    bgColor: "transparent",
    borderColor: "transparent",
    color: colors.text3
  },
  image: {
    bgColor: colors.theme1,
    borderColor: colors.theme3,
    label: {
      color: colors.text2
    }
  },
  loading: {
    default: {
      bgColor: colors.primary1
    },
    alternate: {
      bgColor: colors.theme1
    }
  },
  section: {
    bgColor: colors.theme1,
    borderColor: colors.theme3,
    label: {
      color: colors.text2
    }
  },
  textInput: {
    errors: {
      color: colors.errorText
    },
    input: {
      _focus: {
        borderColor: colors.primary1,
        color: colors.text1
      },
      borderColor: colors.theme3,
      color: colors.text2
    },
    label: {
      color: colors.text2
    }
  }
};
