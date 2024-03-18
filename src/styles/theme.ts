import { TypographySize, TypographyBold } from './components/types';

const colors = {
    dark : {
        1 : '#1A1A1A',
        2 : '#282828',
        3 : '#393939',
        4 : '#4D4D4D',
        5 : '#666666',
        6 : '#818181',
        7 : '#A2A2A2',
        8 : '#C2C2C2',
        9 : "#DDDDDD",
        10 : '#F0F0F0'
    }
}

const theme = {
    colors : {
        main : {
            primary : "#9772AE",
            text : {
                head : colors.dark[2],
                body : colors.dark[5],
                light : colors.dark[7]
            },
        },

        dark : {
            1 : colors.dark[1],
            2 : colors.dark[2],
            3 : colors.dark[3],
            4 : colors.dark[4],
            5 : colors.dark[5],
            6 : colors.dark[6],
            7 : colors.dark[7],
            8 : colors.dark[8],
            9 : colors.dark[9],
            10 : colors.dark[10],
        },

        gray : {
            gray1 : "#3A3D3F",
            gray2 : "#5B5F61",
            gray3 : "#999D9F",
            gray4 : "#B9BCBD",
            gray5 : "#D4D9DC",
            gray6 : "#DADADA",
            gray7 : "#F3F3F3",
            gray8 : "#F5F6F7",
            gray9 : "#FAFAFB",
        },

        blue : {
            blue1 : "#041957",
            blue2 : "#1D3B95",
            blue3 : "#4169E1",
            blue4 : "#ACC1FF",
            blue5 : "#DDE6FF",
            blue6 : "#EBF0FF",
            blue7 : "#F5F7FF",
            blue8 : "#FAFBFF",
            blue9 : "#F4F5F9",
        },

        green : {
            green1 : "#005200",
            green2 : "#029202",
            green3 : "#6BC36B",
            green4 : "#ABE8AB",
            green5 : "#DFF4DF",
        },

        red : {
            red1 : "#730404",
            red2 : "#A70000",
            red3 : "#E45353",
            red4 : "#F0A0A0",
            red5 : "#FFDCDC",
        },

        orange : {
            orange1 : "#77410E",
            orange2 : "#B66F1D",
            orange3 : "#EEAB46",
            orange4 : "#FFCBA6",
            orange5 : "#FFEBD9",
        },

        violet : {
            violet1 : "#4B1166",
            violet2 : "#8523B2",
            violet3 : "#B946EE",
            violet4 : "#DCACF2",
            violet5 : "#EEE0F5",
        },

        shades : {
            white : "#ffffff",
            black : "#000000"
        }
    },

    typography: {
        size: { xs: TypographySize.xs, sm: TypographySize.sm, sm2: TypographySize.sm2, md: TypographySize.md, 
            md2 : TypographySize.md2, lg: TypographySize.lg, lg2 : TypographySize.lg,
            xl: TypographySize.xl, xxl: TypographySize.xxl, xl3: TypographySize.xl3 },
        bold: { sm: TypographyBold.sm, md: TypographyBold.md, lg: TypographyBold.lg },
      },

    spacing: {
        xs: "6px",
        sm: "12px",
        md: "18px",
        lg: "30px",
    },

    borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "25px",
    },

    breakpoints: {
        xs: "600px",
        sm: "800px",
        md: "1000px",
        lg: "1200px",
        xl: "1400px",
    },
}

export default theme