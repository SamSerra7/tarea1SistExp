/*jshint esversion: 6 */

//Transpose the Excel to JSON and returned it as a Json Object
const getJSON = () => {
    let strJSON = `
        {
            "RecintoEstilo": [
                {
                    "Recinto": "Paraiso",
                    "CA": "15",
                    "EC": "15",
                    "EA": "19",
                    "OR": "12",
                    "CA-EC": "0",
                    "EA-OR": "7",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "17",
                    "EA": "18",
                    "OR": "19",
                    "CA-EC": "-1",
                    "EA-OR": "-1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "15",
                    "EC": "13",
                    "EA": "17",
                    "OR": "17",
                    "CA-EC": "2",
                    "EA-OR": "0",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "19",
                    "EC": "13",
                    "EA": "13",
                    "OR": "20",
                    "CA-EC": "6",
                    "EA-OR": "-7",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "19",
                    "EC": "11",
                    "EA": "14",
                    "OR": "17",
                    "CA-EC": "8",
                    "EA-OR": "-3",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "12",
                    "EA": "21",
                    "OR": "14",
                    "CA-EC": "6",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "11",
                    "EC": "19",
                    "EA": "16",
                    "OR": "16",
                    "CA-EC": "-8",
                    "EA-OR": "0",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "19",
                    "EC": "14",
                    "EA": "19",
                    "OR": "18",
                    "CA-EC": "5",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "17",
                    "EA": "16",
                    "OR": "15",
                    "CA-EC": "-1",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "19",
                    "EC": "11",
                    "EA": "19",
                    "OR": "17",
                    "CA-EC": "8",
                    "EA-OR": "2",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "19",
                    "EC": "16",
                    "EA": "13",
                    "OR": "16",
                    "CA-EC": "3",
                    "EA-OR": "-3",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "13",
                    "EC": "14",
                    "EA": "21",
                    "OR": "13",
                    "CA-EC": "-1",
                    "EA-OR": "8",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "21",
                    "EC": "14",
                    "EA": "12",
                    "OR": "18",
                    "CA-EC": "7",
                    "EA-OR": "-6",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "15",
                    "EA": "18",
                    "OR": "19",
                    "CA-EC": "1",
                    "EA-OR": "-1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "18",
                    "EC": "10",
                    "EA": "22",
                    "OR": "13",
                    "CA-EC": "8",
                    "EA-OR": "9",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "15",
                    "EA": "13",
                    "OR": "18",
                    "CA-EC": "2",
                    "EA-OR": "-5",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "15",
                    "EC": "17",
                    "EA": "19",
                    "OR": "15",
                    "CA-EC": "-2",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "20",
                    "EC": "15",
                    "EA": "15",
                    "OR": "12",
                    "CA-EC": "5",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "15",
                    "EA": "15",
                    "OR": "17",
                    "CA-EC": "2",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "12",
                    "EC": "17",
                    "EA": "12",
                    "OR": "21",
                    "CA-EC": "-5",
                    "EA-OR": "-9",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "21",
                    "EC": "10",
                    "EA": "11",
                    "OR": "23",
                    "CA-EC": "11",
                    "EA-OR": "-12",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "17",
                    "EC": "13",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "4",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "11",
                    "EC": "15",
                    "EA": "20",
                    "OR": "16",
                    "CA-EC": "-4",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "15",
                    "EA": "22",
                    "OR": "13",
                    "CA-EC": "-2",
                    "EA-OR": "9",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "17",
                    "EC": "13",
                    "EA": "16",
                    "OR": "15",
                    "CA-EC": "4",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "17",
                    "EC": "13",
                    "EA": "21",
                    "OR": "14",
                    "CA-EC": "4",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "15",
                    "EC": "16",
                    "EA": "13",
                    "OR": "17",
                    "CA-EC": "-1",
                    "EA-OR": "-4",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "11",
                    "EA": "20",
                    "OR": "12",
                    "CA-EC": "5",
                    "EA-OR": "8",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "15",
                    "EA": "15",
                    "OR": "17",
                    "CA-EC": "-1",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "18",
                    "EC": "11",
                    "EA": "21",
                    "OR": "18",
                    "CA-EC": "7",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "11",
                    "EA": "18",
                    "OR": "15",
                    "CA-EC": "3",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "17",
                    "EA": "14",
                    "OR": "21",
                    "CA-EC": "-1",
                    "EA-OR": "-7",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "13",
                    "EA": "22",
                    "OR": "11",
                    "CA-EC": "4",
                    "EA-OR": "11",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "15",
                    "EA": "18",
                    "OR": "15",
                    "CA-EC": "1",
                    "EA-OR": "3",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "19",
                    "EC": "18",
                    "EA": "20",
                    "OR": "11",
                    "CA-EC": "1",
                    "EA-OR": "9",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "12",
                    "EC": "15",
                    "EA": "16",
                    "OR": "18",
                    "CA-EC": "-3",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "9",
                    "EC": "21",
                    "EA": "18",
                    "OR": "17",
                    "CA-EC": "-12",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "18",
                    "EC": "11",
                    "EA": "17",
                    "OR": "14",
                    "CA-EC": "7",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "10",
                    "EC": "17",
                    "EA": "17",
                    "OR": "17",
                    "CA-EC": "-7",
                    "EA-OR": "0",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "14",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "2",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "19",
                    "EC": "12",
                    "EA": "18",
                    "OR": "15",
                    "CA-EC": "7",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "17",
                    "EC": "13",
                    "EA": "20",
                    "OR": "13",
                    "CA-EC": "4",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "14",
                    "EA": "16",
                    "OR": "18",
                    "CA-EC": "3",
                    "EA-OR": "-2",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "20",
                    "EC": "13",
                    "EA": "11",
                    "OR": "19",
                    "CA-EC": "7",
                    "EA-OR": "-8",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "10",
                    "EC": "15",
                    "EA": "16",
                    "OR": "19",
                    "CA-EC": "-5",
                    "EA-OR": "-3",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "20",
                    "EC": "12",
                    "EA": "18",
                    "OR": "12",
                    "CA-EC": "8",
                    "EA-OR": "6",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "19",
                    "EC": "17",
                    "EA": "15",
                    "OR": "18",
                    "CA-EC": "2",
                    "EA-OR": "-3",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "12",
                    "EA": "14",
                    "OR": "19",
                    "CA-EC": "4",
                    "EA-OR": "-5",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "13",
                    "EA": "16",
                    "OR": "15",
                    "CA-EC": "4",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "15",
                    "EC": "12",
                    "EA": "14",
                    "OR": "23",
                    "CA-EC": "3",
                    "EA-OR": "-9",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "11",
                    "EC": "16",
                    "EA": "17",
                    "OR": "19",
                    "CA-EC": "-5",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "12",
                    "EA": "21",
                    "OR": "15",
                    "CA-EC": "5",
                    "EA-OR": "6",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "19",
                    "EC": "14",
                    "EA": "21",
                    "OR": "9",
                    "CA-EC": "5",
                    "EA-OR": "12",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "14",
                    "EA": "17",
                    "OR": "15",
                    "CA-EC": "1",
                    "EA-OR": "2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "20",
                    "EC": "10",
                    "EA": "18",
                    "OR": "12",
                    "CA-EC": "10",
                    "EA-OR": "6",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "18",
                    "EA": "13",
                    "OR": "14",
                    "CA-EC": "-4",
                    "EA-OR": "-1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "15",
                    "EC": "16",
                    "EA": "12",
                    "OR": "20",
                    "CA-EC": "-1",
                    "EA-OR": "-8",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "18",
                    "EC": "14",
                    "EA": "13",
                    "OR": "17",
                    "CA-EC": "4",
                    "EA-OR": "-4",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "14",
                    "EA": "17",
                    "OR": "18",
                    "CA-EC": "4",
                    "EA-OR": "-1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "14",
                    "EA": "12",
                    "OR": "18",
                    "CA-EC": "3",
                    "EA-OR": "-6",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "19",
                    "EC": "8",
                    "EA": "12",
                    "OR": "21",
                    "CA-EC": "11",
                    "EA-OR": "-9",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "20",
                    "EC": "15",
                    "EA": "15",
                    "OR": "15",
                    "CA-EC": "5",
                    "EA-OR": "0",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "7",
                    "EC": "19",
                    "EA": "19",
                    "OR": "15",
                    "CA-EC": "-12",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "19",
                    "EC": "11",
                    "EA": "21",
                    "OR": "12",
                    "CA-EC": "8",
                    "EA-OR": "9",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "21",
                    "EC": "10",
                    "EA": "20",
                    "OR": "10",
                    "CA-EC": "11",
                    "EA-OR": "10",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "14",
                    "EC": "9",
                    "EA": "24",
                    "OR": "14",
                    "CA-EC": "5",
                    "EA-OR": "10",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "14",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "3",
                    "EA-OR": "4",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "12",
                    "EC": "15",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "-3",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "13",
                    "EA": "17",
                    "OR": "16",
                    "CA-EC": "4",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "17",
                    "EC": "11",
                    "EA": "18",
                    "OR": "18",
                    "CA-EC": "6",
                    "EA-OR": "0",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "14",
                    "EA": "20",
                    "OR": "13",
                    "CA-EC": "0",
                    "EA-OR": "7",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "16",
                    "EA": "20",
                    "OR": "13",
                    "CA-EC": "-2",
                    "EA-OR": "7",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "13",
                    "EA": "20",
                    "OR": "16",
                    "CA-EC": "4",
                    "EA-OR": "4",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "14",
                    "EA": "16",
                    "OR": "15",
                    "CA-EC": "-1",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "18",
                    "EC": "12",
                    "EA": "17",
                    "OR": "16",
                    "CA-EC": "6",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "16",
                    "EA": "19",
                    "OR": "15",
                    "CA-EC": "-2",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "11",
                    "EC": "15",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "-4",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "14",
                    "EA": "20",
                    "OR": "15",
                    "CA-EC": "3",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "11",
                    "EA": "14",
                    "OR": "19",
                    "CA-EC": "5",
                    "EA-OR": "-5",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "17",
                    "EC": "12",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "5",
                    "EA-OR": "4",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "20",
                    "EC": "14",
                    "EA": "19",
                    "OR": "10",
                    "CA-EC": "6",
                    "EA-OR": "9",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "16",
                    "EA": "20",
                    "OR": "10",
                    "CA-EC": "0",
                    "EA-OR": "10",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "15",
                    "EC": "13",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "2",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "14",
                    "EC": "14",
                    "EA": "17",
                    "OR": "14",
                    "CA-EC": "0",
                    "EA-OR": "3",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "20",
                    "EC": "13",
                    "EA": "14",
                    "OR": "12",
                    "CA-EC": "7",
                    "EA-OR": "2",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "22",
                    "EC": "10",
                    "EA": "18",
                    "OR": "12",
                    "CA-EC": "12",
                    "EA-OR": "6",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "15",
                    "EC": "15",
                    "EA": "17",
                    "OR": "18",
                    "CA-EC": "0",
                    "EA-OR": "-1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "17",
                    "EC": "13",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "4",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "17",
                    "EA": "13",
                    "OR": "23",
                    "CA-EC": "-1",
                    "EA-OR": "-10",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "15",
                    "EC": "12",
                    "EA": "17",
                    "OR": "18",
                    "CA-EC": "3",
                    "EA-OR": "-1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "11",
                    "EC": "15",
                    "EA": "16",
                    "OR": "21",
                    "CA-EC": "-4",
                    "EA-OR": "-5",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "12",
                    "EA": "19",
                    "OR": "16",
                    "CA-EC": "5",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "17",
                    "EA": "19",
                    "OR": "15",
                    "CA-EC": "-3",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "19",
                    "EC": "9",
                    "EA": "23",
                    "OR": "10",
                    "CA-EC": "10",
                    "EA-OR": "13",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "13",
                    "EA": "21",
                    "OR": "14",
                    "CA-EC": "1",
                    "EA-OR": "7",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "16",
                    "EA": "17",
                    "OR": "18",
                    "CA-EC": "-2",
                    "EA-OR": "-1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "12",
                    "EA": "15",
                    "OR": "16",
                    "CA-EC": "4",
                    "EA-OR": "-1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "15",
                    "EA": "16",
                    "OR": "13",
                    "CA-EC": "3",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "17",
                    "EA": "14",
                    "OR": "18",
                    "CA-EC": "-3",
                    "EA-OR": "-4",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "13",
                    "EA": "22",
                    "OR": "12",
                    "CA-EC": "3",
                    "EA-OR": "10",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "15",
                    "EA": "19",
                    "OR": "16",
                    "CA-EC": "-2",
                    "EA-OR": "3",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "15",
                    "EA": "18",
                    "OR": "17",
                    "CA-EC": "0",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "8",
                    "EA": "18",
                    "OR": "18",
                    "CA-EC": "9",
                    "EA-OR": "0",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "10",
                    "EA": "15",
                    "OR": "20",
                    "CA-EC": "8",
                    "EA-OR": "-5",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "15",
                    "EA": "19",
                    "OR": "9",
                    "CA-EC": "3",
                    "EA-OR": "10",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "15",
                    "EA": "20",
                    "OR": "15",
                    "CA-EC": "0",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "16",
                    "EA": "18",
                    "OR": "15",
                    "CA-EC": "-2",
                    "EA-OR": "3",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "11",
                    "EA": "22",
                    "OR": "13",
                    "CA-EC": "5",
                    "EA-OR": "9",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "11",
                    "EC": "16",
                    "EA": "20",
                    "OR": "14",
                    "CA-EC": "-5",
                    "EA-OR": "6",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "19",
                    "EC": "14",
                    "EA": "17",
                    "OR": "14",
                    "CA-EC": "5",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "17",
                    "EC": "16",
                    "EA": "17",
                    "OR": "14",
                    "CA-EC": "1",
                    "EA-OR": "3",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "15",
                    "EA": "20",
                    "OR": "14",
                    "CA-EC": "1",
                    "EA-OR": "6",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "14",
                    "EC": "14",
                    "EA": "20",
                    "OR": "16",
                    "CA-EC": "0",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "13",
                    "EC": "13",
                    "EA": "21",
                    "OR": "15",
                    "CA-EC": "0",
                    "EA-OR": "6",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "19",
                    "EC": "11",
                    "EA": "15",
                    "OR": "20",
                    "CA-EC": "8",
                    "EA-OR": "-5",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "17",
                    "EC": "14",
                    "EA": "20",
                    "OR": "8",
                    "CA-EC": "3",
                    "EA-OR": "12",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "24",
                    "EC": "12",
                    "EA": "12",
                    "OR": "14",
                    "CA-EC": "12",
                    "EA-OR": "-2",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "18",
                    "EC": "14",
                    "EA": "13",
                    "OR": "18",
                    "CA-EC": "4",
                    "EA-OR": "-5",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "10",
                    "EC": "21",
                    "EA": "18",
                    "OR": "13",
                    "CA-EC": "-11",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "9",
                    "EC": "16",
                    "EA": "20",
                    "OR": "17",
                    "CA-EC": "-7",
                    "EA-OR": "3",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "20",
                    "EC": "12",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "8",
                    "EA-OR": "4",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "12",
                    "EA": "24",
                    "OR": "11",
                    "CA-EC": "6",
                    "EA-OR": "13",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "15",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "1",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "15",
                    "EA": "21",
                    "OR": "12",
                    "CA-EC": "-1",
                    "EA-OR": "9",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "14",
                    "EA": "22",
                    "OR": "12",
                    "CA-EC": "1",
                    "EA-OR": "10",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "14",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "1",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "13",
                    "EA": "20",
                    "OR": "13",
                    "CA-EC": "1",
                    "EA-OR": "7",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "15",
                    "EA": "15",
                    "OR": "14",
                    "CA-EC": "2",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "15",
                    "EA": "16",
                    "OR": "13",
                    "CA-EC": "3",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "16",
                    "EA": "9",
                    "OR": "20",
                    "CA-EC": "1",
                    "EA-OR": "-11",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "12",
                    "EA": "20",
                    "OR": "11",
                    "CA-EC": "5",
                    "EA-OR": "9",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "13",
                    "EA": "19",
                    "OR": "13",
                    "CA-EC": "2",
                    "EA-OR": "6",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "17",
                    "EA": "14",
                    "OR": "13",
                    "CA-EC": "0",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "16",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "1",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "16",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "-2",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "24",
                    "EC": "9",
                    "EA": "12",
                    "OR": "16",
                    "CA-EC": "15",
                    "EA-OR": "-4",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "15",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "-1",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "15",
                    "EA": "15",
                    "OR": "18",
                    "CA-EC": "2",
                    "EA-OR": "-3",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "21",
                    "EC": "14",
                    "EA": "18",
                    "OR": "11",
                    "CA-EC": "7",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "14",
                    "EA": "22",
                    "OR": "15",
                    "CA-EC": "1",
                    "EA-OR": "7",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "19",
                    "EC": "14",
                    "EA": "14",
                    "OR": "15",
                    "CA-EC": "5",
                    "EA-OR": "-1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "20",
                    "EC": "15",
                    "EA": "15",
                    "OR": "12",
                    "CA-EC": "5",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "14",
                    "EA": "18",
                    "OR": "13",
                    "CA-EC": "3",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "13",
                    "EA": "20",
                    "OR": "18",
                    "CA-EC": "1",
                    "EA-OR": "2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "10",
                    "EA": "18",
                    "OR": "15",
                    "CA-EC": "6",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "16",
                    "EA": "22",
                    "OR": "12",
                    "CA-EC": "0",
                    "EA-OR": "10",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "11",
                    "EA": "20",
                    "OR": "15",
                    "CA-EC": "2",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "17",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "-2",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "13",
                    "EA": "19",
                    "OR": "12",
                    "CA-EC": "5",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "16",
                    "EA": "14",
                    "OR": "19",
                    "CA-EC": "0",
                    "EA-OR": "-5",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "11",
                    "EC": "18",
                    "EA": "16",
                    "OR": "16",
                    "CA-EC": "-7",
                    "EA-OR": "0",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "12",
                    "EC": "13",
                    "EA": "22",
                    "OR": "13",
                    "CA-EC": "-1",
                    "EA-OR": "9",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "14",
                    "EA": "16",
                    "OR": "14",
                    "CA-EC": "2",
                    "EA-OR": "2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "16",
                    "EA": "16",
                    "OR": "11",
                    "CA-EC": "0",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "15",
                    "EA": "22",
                    "OR": "13",
                    "CA-EC": "2",
                    "EA-OR": "9",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "13",
                    "EA": "19",
                    "OR": "17",
                    "CA-EC": "0",
                    "EA-OR": "2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "16",
                    "EA": "16",
                    "OR": "18",
                    "CA-EC": "1",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "17",
                    "EA": "13",
                    "OR": "16",
                    "CA-EC": "0",
                    "EA-OR": "-3",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "19",
                    "EC": "7",
                    "EA": "20",
                    "OR": "15",
                    "CA-EC": "12",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "12",
                    "EA": "20",
                    "OR": "14",
                    "CA-EC": "4",
                    "EA-OR": "6",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "13",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "4",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "12",
                    "EC": "13",
                    "EA": "22",
                    "OR": "12",
                    "CA-EC": "-1",
                    "EA-OR": "10",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "14",
                    "EA": "12",
                    "OR": "21",
                    "CA-EC": "1",
                    "EA-OR": "-9",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "11",
                    "EA": "16",
                    "OR": "19",
                    "CA-EC": "7",
                    "EA-OR": "-3",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "13",
                    "EA": "21",
                    "OR": "12",
                    "CA-EC": "1",
                    "EA-OR": "9",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "12",
                    "EA": "19",
                    "OR": "12",
                    "CA-EC": "5",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "20",
                    "EC": "11",
                    "EA": "18",
                    "OR": "16",
                    "CA-EC": "9",
                    "EA-OR": "2",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "9",
                    "EA": "21",
                    "OR": "15",
                    "CA-EC": "9",
                    "EA-OR": "6",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "15",
                    "EA": "19",
                    "OR": "13",
                    "CA-EC": "-2",
                    "EA-OR": "6",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "13",
                    "EA": "19",
                    "OR": "13",
                    "CA-EC": "3",
                    "EA-OR": "6",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "19",
                    "EC": "12",
                    "EA": "16",
                    "OR": "17",
                    "CA-EC": "7",
                    "EA-OR": "-1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "14",
                    "EA": "18",
                    "OR": "17",
                    "CA-EC": "-1",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "15",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "-1",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "17",
                    "EA": "15",
                    "OR": "15",
                    "CA-EC": "0",
                    "EA-OR": "0",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "20",
                    "EC": "13",
                    "EA": "20",
                    "OR": "15",
                    "CA-EC": "7",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "16",
                    "EA": "16",
                    "OR": "18",
                    "CA-EC": "-3",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "10",
                    "EA": "21",
                    "OR": "16",
                    "CA-EC": "7",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "21",
                    "EC": "11",
                    "EA": "16",
                    "OR": "14",
                    "CA-EC": "10",
                    "EA-OR": "2",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "24",
                    "EC": "12",
                    "EA": "17",
                    "OR": "18",
                    "CA-EC": "12",
                    "EA-OR": "-1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "18",
                    "EA": "21",
                    "OR": "12",
                    "CA-EC": "-1",
                    "EA-OR": "9",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "13",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "0",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "14",
                    "EC": "16",
                    "EA": "16",
                    "OR": "19",
                    "CA-EC": "-2",
                    "EA-OR": "-3",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "15",
                    "EA": "22",
                    "OR": "14",
                    "CA-EC": "0",
                    "EA-OR": "8",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "12",
                    "EC": "15",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "-3",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "15",
                    "EC": "8",
                    "EA": "19",
                    "OR": "16",
                    "CA-EC": "7",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "12",
                    "EA": "15",
                    "OR": "22",
                    "CA-EC": "6",
                    "EA-OR": "-7",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "15",
                    "EA": "17",
                    "OR": "16",
                    "CA-EC": "2",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "21",
                    "EC": "11",
                    "EA": "18",
                    "OR": "13",
                    "CA-EC": "10",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "12",
                    "EC": "14",
                    "EA": "17",
                    "OR": "19",
                    "CA-EC": "-2",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "14",
                    "EC": "14",
                    "EA": "20",
                    "OR": "15",
                    "CA-EC": "0",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "13",
                    "EC": "12",
                    "EA": "18",
                    "OR": "17",
                    "CA-EC": "1",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "14",
                    "EC": "16",
                    "EA": "16",
                    "OR": "16",
                    "CA-EC": "-2",
                    "EA-OR": "0",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "19",
                    "EC": "14",
                    "EA": "19",
                    "OR": "10",
                    "CA-EC": "5",
                    "EA-OR": "9",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "19",
                    "EC": "15",
                    "EA": "14",
                    "OR": "14",
                    "CA-EC": "4",
                    "EA-OR": "0",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "13",
                    "EC": "13",
                    "EA": "21",
                    "OR": "15",
                    "CA-EC": "0",
                    "EA-OR": "6",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "15",
                    "EC": "18",
                    "EA": "18",
                    "OR": "13",
                    "CA-EC": "-3",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "12",
                    "EC": "17",
                    "EA": "19",
                    "OR": "13",
                    "CA-EC": "-5",
                    "EA-OR": "6",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "16",
                    "EA": "19",
                    "OR": "13",
                    "CA-EC": "0",
                    "EA-OR": "6",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "14",
                    "EC": "14",
                    "EA": "20",
                    "OR": "15",
                    "CA-EC": "0",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "14",
                    "EA": "17",
                    "OR": "19",
                    "CA-EC": "-2",
                    "EA-OR": "2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "19",
                    "EC": "14",
                    "EA": "19",
                    "OR": "10",
                    "CA-EC": "5",
                    "EA-OR": "9",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "16",
                    "EA": "19",
                    "OR": "13",
                    "CA-EC": "0",
                    "EA-OR": "6",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "13",
                    "EC": "13",
                    "EA": "21",
                    "OR": "15",
                    "CA-EC": "0",
                    "EA-OR": "6",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "13",
                    "EC": "12",
                    "EA": "18",
                    "OR": "17",
                    "CA-EC": "1",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "22",
                    "EC": "10",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "12",
                    "EA-OR": "4",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "15",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "2",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "14",
                    "EA": "17",
                    "OR": "10",
                    "CA-EC": "4",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "12",
                    "EA": "20",
                    "OR": "12",
                    "CA-EC": "1",
                    "EA-OR": "8",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "14",
                    "EA": "20",
                    "OR": "15",
                    "CA-EC": "2",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "11",
                    "EC": "19",
                    "EA": "11",
                    "OR": "16",
                    "CA-EC": "-8",
                    "EA-OR": "-5",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "14",
                    "EC": "11",
                    "EA": "19",
                    "OR": "18",
                    "CA-EC": "3",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "16",
                    "EC": "10",
                    "EA": "20",
                    "OR": "15",
                    "CA-EC": "6",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Paraiso",
                    "CA": "9",
                    "EC": "16",
                    "EA": "24",
                    "OR": "13",
                    "CA-EC": "-7",
                    "EA-OR": "11",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "22",
                    "EC": "10",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "12",
                    "EA-OR": "4",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "13",
                    "EC": "12",
                    "EA": "20",
                    "OR": "12",
                    "CA-EC": "1",
                    "EA-OR": "8",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "14",
                    "EA": "20",
                    "OR": "15",
                    "CA-EC": "2",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "16",
                    "EC": "16",
                    "EA": "22",
                    "OR": "13",
                    "CA-EC": "0",
                    "EA-OR": "9",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "12",
                    "EC": "12",
                    "EA": "22",
                    "OR": "28",
                    "CA-EC": "0",
                    "EA-OR": "-6",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "15",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "2",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "11",
                    "EC": "19",
                    "EA": "11",
                    "OR": "16",
                    "CA-EC": "-8",
                    "EA-OR": "-5",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "14",
                    "EA": "17",
                    "OR": "10",
                    "CA-EC": "4",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Recinto": "Turrialba",
                    "CA": "17",
                    "EC": "10",
                    "EA": "20",
                    "OR": "19",
                    "CA-EC": "7",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                }
            ],
            "EstiloSexoPromedioRecinto": [
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "8.17",
                    "CA": "15",
                    "EC": "15",
                    "EA": "19",
                    "OR": "12",
                    "CA-EC": "0",
                    "EA-OR": "7",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "6.33",
                    "CA": "16",
                    "EC": "17",
                    "EA": "18",
                    "OR": "19",
                    "CA-EC": "-1",
                    "EA-OR": "-1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.07",
                    "CA": "15",
                    "EC": "13",
                    "EA": "17",
                    "OR": "17",
                    "CA-EC": "2",
                    "EA-OR": "0",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "6.6",
                    "CA": "19",
                    "EC": "13",
                    "EA": "13",
                    "OR": "20",
                    "CA-EC": "6",
                    "EA-OR": "-7",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Turrialba",
                    "Promedio": "7.77",
                    "CA": "19",
                    "EC": "11",
                    "EA": "14",
                    "OR": "17",
                    "CA-EC": "8",
                    "EA-OR": "-3",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.87",
                    "CA": "18",
                    "EC": "12",
                    "EA": "21",
                    "OR": "14",
                    "CA-EC": "6",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Paraiso",
                    "Promedio": "7.53",
                    "CA": "11",
                    "EC": "19",
                    "EA": "16",
                    "OR": "16",
                    "CA-EC": "-8",
                    "EA-OR": "0",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7",
                    "CA": "19",
                    "EC": "14",
                    "EA": "19",
                    "OR": "18",
                    "CA-EC": "5",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "8",
                    "CA": "16",
                    "EC": "17",
                    "EA": "16",
                    "OR": "15",
                    "CA-EC": "-1",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.9",
                    "CA": "19",
                    "EC": "11",
                    "EA": "19",
                    "OR": "17",
                    "CA-EC": "8",
                    "EA-OR": "2",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.5",
                    "CA": "19",
                    "EC": "16",
                    "EA": "13",
                    "OR": "16",
                    "CA-EC": "3",
                    "EA-OR": "-3",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7",
                    "CA": "13",
                    "EC": "14",
                    "EA": "21",
                    "OR": "13",
                    "CA-EC": "-1",
                    "EA-OR": "8",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Paraiso",
                    "Promedio": "7.4",
                    "CA": "21",
                    "EC": "14",
                    "EA": "12",
                    "OR": "18",
                    "CA-EC": "7",
                    "EA-OR": "-6",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.41",
                    "CA": "16",
                    "EC": "15",
                    "EA": "18",
                    "OR": "19",
                    "CA-EC": "1",
                    "EA-OR": "-1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Paraiso",
                    "Promedio": "7.2",
                    "CA": "18",
                    "EC": "10",
                    "EA": "22",
                    "OR": "13",
                    "CA-EC": "8",
                    "EA-OR": "9",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.5",
                    "CA": "17",
                    "EC": "15",
                    "EA": "13",
                    "OR": "18",
                    "CA-EC": "2",
                    "EA-OR": "-5",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Paraiso",
                    "Promedio": "7.82",
                    "CA": "15",
                    "EC": "17",
                    "EA": "19",
                    "OR": "15",
                    "CA-EC": "-2",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.54",
                    "CA": "20",
                    "EC": "15",
                    "EA": "15",
                    "OR": "12",
                    "CA-EC": "5",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.41",
                    "CA": "17",
                    "EC": "15",
                    "EA": "15",
                    "OR": "17",
                    "CA-EC": "2",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.11",
                    "CA": "12",
                    "EC": "17",
                    "EA": "12",
                    "OR": "21",
                    "CA-EC": "-5",
                    "EA-OR": "-9",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Paraiso",
                    "Promedio": "7.25",
                    "CA": "21",
                    "EC": "10",
                    "EA": "11",
                    "OR": "23",
                    "CA-EC": "11",
                    "EA-OR": "-12",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "8.06",
                    "CA": "17",
                    "EC": "13",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "4",
                    "EA-OR": "5",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.75",
                    "CA": "11",
                    "EC": "15",
                    "EA": "20",
                    "OR": "16",
                    "CA-EC": "-4",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.09",
                    "CA": "13",
                    "EC": "15",
                    "EA": "22",
                    "OR": "13",
                    "CA-EC": "-2",
                    "EA-OR": "9",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "6.14",
                    "CA": "17",
                    "EC": "13",
                    "EA": "16",
                    "OR": "15",
                    "CA-EC": "4",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.72",
                    "CA": "17",
                    "EC": "13",
                    "EA": "21",
                    "OR": "14",
                    "CA-EC": "4",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.68",
                    "CA": "15",
                    "EC": "16",
                    "EA": "13",
                    "OR": "17",
                    "CA-EC": "-1",
                    "EA-OR": "-4",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Paraiso",
                    "Promedio": "7.5",
                    "CA": "16",
                    "EC": "11",
                    "EA": "20",
                    "OR": "12",
                    "CA-EC": "5",
                    "EA-OR": "8",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.94",
                    "CA": "14",
                    "EC": "15",
                    "EA": "15",
                    "OR": "17",
                    "CA-EC": "-1",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.86",
                    "CA": "18",
                    "EC": "11",
                    "EA": "21",
                    "OR": "18",
                    "CA-EC": "7",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "6.62",
                    "CA": "14",
                    "EC": "11",
                    "EA": "18",
                    "OR": "15",
                    "CA-EC": "3",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.13",
                    "CA": "16",
                    "EC": "17",
                    "EA": "14",
                    "OR": "21",
                    "CA-EC": "-1",
                    "EA-OR": "-7",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Turrialba",
                    "Promedio": "6.88",
                    "CA": "17",
                    "EC": "13",
                    "EA": "22",
                    "OR": "11",
                    "CA-EC": "4",
                    "EA-OR": "11",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Paraiso",
                    "Promedio": "8.5",
                    "CA": "16",
                    "EC": "15",
                    "EA": "18",
                    "OR": "15",
                    "CA-EC": "1",
                    "EA-OR": "3",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Paraiso",
                    "Promedio": "7",
                    "CA": "19",
                    "EC": "18",
                    "EA": "20",
                    "OR": "11",
                    "CA-EC": "1",
                    "EA-OR": "9",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.83",
                    "CA": "12",
                    "EC": "15",
                    "EA": "16",
                    "OR": "18",
                    "CA-EC": "-3",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.13",
                    "CA": "9",
                    "EC": "21",
                    "EA": "18",
                    "OR": "17",
                    "CA-EC": "-12",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.63",
                    "CA": "18",
                    "EC": "11",
                    "EA": "17",
                    "OR": "14",
                    "CA-EC": "7",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "8.06",
                    "CA": "10",
                    "EC": "17",
                    "EA": "17",
                    "OR": "17",
                    "CA-EC": "-7",
                    "EA-OR": "0",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.72",
                    "CA": "16",
                    "EC": "14",
                    "EA": "19",
                    "OR": "14",
                    "CA-EC": "2",
                    "EA-OR": "5",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.63",
                    "CA": "19",
                    "EC": "12",
                    "EA": "18",
                    "OR": "15",
                    "CA-EC": "7",
                    "EA-OR": "3",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Paraiso",
                    "Promedio": "7.32",
                    "CA": "17",
                    "EC": "13",
                    "EA": "20",
                    "OR": "13",
                    "CA-EC": "4",
                    "EA-OR": "7",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.25",
                    "CA": "17",
                    "EC": "14",
                    "EA": "16",
                    "OR": "18",
                    "CA-EC": "3",
                    "EA-OR": "-2",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.72",
                    "CA": "20",
                    "EC": "13",
                    "EA": "11",
                    "OR": "19",
                    "CA-EC": "7",
                    "EA-OR": "-8",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.39",
                    "CA": "10",
                    "EC": "15",
                    "EA": "16",
                    "OR": "19",
                    "CA-EC": "-5",
                    "EA-OR": "-3",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.78",
                    "CA": "20",
                    "EC": "12",
                    "EA": "18",
                    "OR": "12",
                    "CA-EC": "8",
                    "EA-OR": "6",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.62",
                    "CA": "19",
                    "EC": "17",
                    "EA": "15",
                    "OR": "18",
                    "CA-EC": "2",
                    "EA-OR": "-3",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8",
                    "CA": "16",
                    "EC": "12",
                    "EA": "14",
                    "OR": "19",
                    "CA-EC": "4",
                    "EA-OR": "-5",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.83",
                    "CA": "17",
                    "EC": "13",
                    "EA": "16",
                    "OR": "15",
                    "CA-EC": "4",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "8.5",
                    "CA": "15",
                    "EC": "12",
                    "EA": "14",
                    "OR": "23",
                    "CA-EC": "3",
                    "EA-OR": "-9",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8",
                    "CA": "11",
                    "EC": "16",
                    "EA": "17",
                    "OR": "19",
                    "CA-EC": "-5",
                    "EA-OR": "-2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.06",
                    "CA": "17",
                    "EC": "12",
                    "EA": "21",
                    "OR": "15",
                    "CA-EC": "5",
                    "EA-OR": "6",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.14",
                    "CA": "19",
                    "EC": "14",
                    "EA": "21",
                    "OR": "9",
                    "CA-EC": "5",
                    "EA-OR": "12",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.44",
                    "CA": "15",
                    "EC": "14",
                    "EA": "17",
                    "OR": "15",
                    "CA-EC": "1",
                    "EA-OR": "2",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8",
                    "CA": "20",
                    "EC": "10",
                    "EA": "18",
                    "OR": "12",
                    "CA-EC": "10",
                    "EA-OR": "6",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.75",
                    "CA": "14",
                    "EC": "18",
                    "EA": "13",
                    "OR": "14",
                    "CA-EC": "-4",
                    "EA-OR": "-1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.34",
                    "CA": "15",
                    "EC": "16",
                    "EA": "12",
                    "OR": "20",
                    "CA-EC": "-1",
                    "EA-OR": "-8",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.33",
                    "CA": "18",
                    "EC": "14",
                    "EA": "13",
                    "OR": "17",
                    "CA-EC": "4",
                    "EA-OR": "-4",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "CA": "18",
                    "EC": "14",
                    "EA": "17",
                    "OR": "18",
                    "CA-EC": "4",
                    "EA-OR": "-1",
                    "Estilo": "asimilador"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.84",
                    "CA": "17",
                    "EC": "14",
                    "EA": "12",
                    "OR": "18",
                    "CA-EC": "3",
                    "EA-OR": "-6",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "8.29",
                    "CA": "19",
                    "EC": "8",
                    "EA": "12",
                    "OR": "21",
                    "CA-EC": "11",
                    "EA-OR": "-9",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "8.79",
                    "CA": "20",
                    "EC": "15",
                    "EA": "15",
                    "OR": "15",
                    "CA-EC": "5",
                    "EA-OR": "0",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.5",
                    "CA": "7",
                    "EC": "19",
                    "EA": "19",
                    "OR": "15",
                    "CA-EC": "-12",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.39",
                    "CA": "19",
                    "EC": "11",
                    "EA": "21",
                    "OR": "12",
                    "CA-EC": "8",
                    "EA-OR": "9",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7.43",
                    "CA": "21",
                    "EC": "10",
                    "EA": "20",
                    "OR": "10",
                    "CA-EC": "11",
                    "EA-OR": "10",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "8.43",
                    "CA": "14",
                    "EC": "9",
                    "EA": "24",
                    "OR": "14",
                    "CA-EC": "5",
                    "EA-OR": "10",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.8",
                    "CA": "17",
                    "EC": "14",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "3",
                    "EA-OR": "4",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.2",
                    "CA": "12",
                    "EC": "15",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "-3",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.3",
                    "CA": "17",
                    "EC": "13",
                    "EA": "17",
                    "OR": "16",
                    "CA-EC": "4",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Paraiso",
                    "Promedio": "9",
                    "CA": "17",
                    "EC": "11",
                    "EA": "18",
                    "OR": "18",
                    "CA-EC": "6",
                    "EA-OR": "0",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "6.57",
                    "CA": "14",
                    "EC": "14",
                    "EA": "20",
                    "OR": "13",
                    "CA-EC": "0",
                    "EA-OR": "7",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "F",
                    "Recinto": "Turrialba",
                    "Promedio": "7.63",
                    "CA": "14",
                    "EC": "16",
                    "EA": "20",
                    "OR": "13",
                    "CA-EC": "-2",
                    "EA-OR": "7",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.83",
                    "CA": "17",
                    "EC": "13",
                    "EA": "20",
                    "OR": "16",
                    "CA-EC": "4",
                    "EA-OR": "4",
                    "Estilo": "CONVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "7.69",
                    "CA": "13",
                    "EC": "14",
                    "EA": "16",
                    "OR": "15",
                    "CA-EC": "-1",
                    "EA-OR": "1",
                    "Estilo": "DIVERGENTE"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Paraiso",
                    "Promedio": "7",
                    "CA": "18",
                    "EC": "12",
                    "EA": "17",
                    "OR": "16",
                    "CA-EC": "6",
                    "EA-OR": "1",
                    "Estilo": "ASIMILADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.23",
                    "CA": "14",
                    "EC": "16",
                    "EA": "19",
                    "OR": "15",
                    "CA-EC": "-2",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                },
                {
                    "Sexo": "M",
                    "Recinto": "Turrialba",
                    "Promedio": "8.64",
                    "CA": "11",
                    "EC": "15",
                    "EA": "18",
                    "OR": "14",
                    "CA-EC": "-4",
                    "EA-OR": "4",
                    "Estilo": "ACOMODADOR"
                }
            ],
            "Profesores": [
                {
                    "A": "3",
                    "B": "F",
                    "C": "I",
                    "D": "1",
                    "E": "ND",
                    "F": "A",
                    "G": "N",
                    "H": "S",
                    "Class": "Beginner"
                },
                {
                    "A": "3",
                    "B": "NA",
                    "C": "I",
                    "D": "2",
                    "E": "DM",
                    "F": "H",
                    "G": "S",
                    "H": "S",
                    "Class": "Beginner"
                },
                {
                    "A": "3",
                    "B": "M",
                    "C": "B",
                    "D": "2",
                    "E": "ND",
                    "F": "L",
                    "G": "N",
                    "H": "S",
                    "Class": "Beginner"
                },
                {
                    "A": "3",
                    "B": "M",
                    "C": "I",
                    "D": "1",
                    "E": "DM",
                    "F": "A",
                    "G": "S",
                    "H": "N",
                    "Class": "Beginner"
                },
                {
                    "A": "3",
                    "B": "F",
                    "C": "B",
                    "D": "2",
                    "E": "DM",
                    "F": "A",
                    "G": "S",
                    "H": "O",
                    "Class": "Beginner"
                },
                {
                    "A": "3",
                    "B": "NA",
                    "C": "I",
                    "D": "3",
                    "E": "DM",
                    "F": "L",
                    "G": "O",
                    "H": "N",
                    "Class": "Beginner"
                },
                {
                    "A": "3",
                    "B": "M",
                    "C": "B",
                    "D": "1",
                    "E": "DM",
                    "F": "A",
                    "G": "O",
                    "H": "N",
                    "Class": "Beginner"
                },
                {
                    "A": "3",
                    "B": "F",
                    "C": "B",
                    "D": "3",
                    "E": "O",
                    "F": "L",
                    "G": "O",
                    "H": "O",
                    "Class": "Beginner"
                },
                {
                    "A": "3",
                    "B": "F",
                    "C": "I",
                    "D": "1",
                    "E": "ND",
                    "F": "H",
                    "G": "O",
                    "H": "S",
                    "Class": "Beginner"
                },
                {
                    "A": "1",
                    "B": "M",
                    "C": "I",
                    "D": "3",
                    "E": "ND",
                    "F": "H",
                    "G": "S",
                    "H": "S",
                    "Class": "Intermediate"
                },
                {
                    "A": "1",
                    "B": "NA",
                    "C": "I",
                    "D": "1",
                    "E": "O",
                    "F": "H",
                    "G": "N",
                    "H": "O",
                    "Class": "Intermediate"
                },
                {
                    "A": "1",
                    "B": "NA",
                    "C": "B",
                    "D": "2",
                    "E": "O",
                    "F": "A",
                    "G": "O",
                    "H": "N",
                    "Class": "Intermediate"
                },
                {
                    "A": "1",
                    "B": "M",
                    "C": "B",
                    "D": "3",
                    "E": "ND",
                    "F": "A",
                    "G": "O",
                    "H": "O",
                    "Class": "Intermediate"
                },
                {
                    "A": "1",
                    "B": "NA",
                    "C": "B",
                    "D": "3",
                    "E": "O",
                    "F": "H",
                    "G": "O",
                    "H": "S",
                    "Class": "Intermediate"
                },
                {
                    "A": "1",
                    "B": "N",
                    "C": "A",
                    "D": "1",
                    "E": "O",
                    "F": "A",
                    "G": "S",
                    "H": "O",
                    "Class": "Intermediate"
                },
                {
                    "A": "2",
                    "B": "F",
                    "C": "I",
                    "D": "3",
                    "E": "O",
                    "F": "H",
                    "G": "S",
                    "H": "O",
                    "Class": "Advanced"
                },
                {
                    "A": "2",
                    "B": "NA",
                    "C": "I",
                    "D": "2",
                    "E": "ND",
                    "F": "L",
                    "G": "N",
                    "H": "S",
                    "Class": "Advanced"
                },
                {
                    "A": "2",
                    "B": "F",
                    "C": "A",
                    "D": "3",
                    "E": "DM",
                    "F": "L",
                    "G": "O",
                    "H": "N",
                    "Class": "Advanced"
                },
                {
                    "A": "2",
                    "B": "F",
                    "C": "A",
                    "D": "1",
                    "E": "O",
                    "F": "H",
                    "G": "S",
                    "H": "S",
                    "Class": "Advanced"
                },
                {
                    "A": "2",
                    "B": "M",
                    "C": "I",
                    "D": "2",
                    "E": "ND",
                    "F": "H",
                    "G": "S",
                    "H": "S",
                    "Class": "Advanced"
                }
            ],
            "Redes": [
                {
                    "Id": "1",
                    "Reliability (R)": "2",
                    "Number of links (L)": "7",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "A"
                },
                {
                    "Id": "2",
                    "Reliability (R)": "2",
                    "Number of links (L)": "16",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "A"
                },
                {
                    "Id": "3",
                    "Reliability (R)": "2",
                    "Number of links (L)": "9",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "A"
                },
                {
                    "Id": "4",
                    "Reliability (R)": "2",
                    "Number of links (L)": "14",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "A"
                },
                {
                    "Id": "5",
                    "Reliability (R)": "2",
                    "Number of links (L)": "11",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "Low",
                    "Class": "A"
                },
                {
                    "Id": "6",
                    "Reliability (R)": "2",
                    "Number of links (L)": "12",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "Low",
                    "Class": "A"
                },
                {
                    "Id": "7",
                    "Reliability (R)": "2",
                    "Number of links (L)": "10",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "Medium",
                    "Class": "A"
                },
                {
                    "Id": "8",
                    "Reliability (R)": "2",
                    "Number of links (L)": "13",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "Medium",
                    "Class": "A"
                },
                {
                    "Id": "9",
                    "Reliability (R)": "3",
                    "Number of links (L)": "15",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "A"
                },
                {
                    "Id": "10",
                    "Reliability (R)": "3",
                    "Number of links (L)": "17",
                    "Capacity (Ca)": "Low",
                    "Costo (Co)": "Low",
                    "Class": "A"
                },
                {
                    "Id": "11",
                    "Reliability (R)": "3",
                    "Number of links (L)": "18",
                    "Capacity (Ca)": "Low",
                    "Costo (Co)": "Low",
                    "Class": "A"
                },
                {
                    "Id": "12",
                    "Reliability (R)": "3",
                    "Number of links (L)": "15",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "A"
                },
                {
                    "Id": "13",
                    "Reliability (R)": "3",
                    "Number of links (L)": "16",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "A"
                },
                {
                    "Id": "14",
                    "Reliability (R)": "3",
                    "Number of links (L)": "11",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "Low",
                    "Class": "A"
                },
                {
                    "Id": "15",
                    "Reliability (R)": "3",
                    "Number of links (L)": "13",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "Low",
                    "Class": "A"
                },
                {
                    "Id": "16",
                    "Reliability (R)": "3",
                    "Number of links (L)": "17",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "Medium",
                    "Class": "A"
                },
                {
                    "Id": "17",
                    "Reliability (R)": "5",
                    "Number of links (L)": "19",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "Medium",
                    "Class": "B"
                },
                {
                    "Id": "18",
                    "Reliability (R)": "4",
                    "Number of links (L)": "18",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "19",
                    "Reliability (R)": "5",
                    "Number of links (L)": "19",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "20",
                    "Reliability (R)": "5",
                    "Number of links (L)": "18",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "21",
                    "Reliability (R)": "4",
                    "Number of links (L)": "18",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "22",
                    "Reliability (R)": "4",
                    "Number of links (L)": "18",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "23",
                    "Reliability (R)": "4",
                    "Number of links (L)": "19",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "24",
                    "Reliability (R)": "4",
                    "Number of links (L)": "19",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "Medium",
                    "Class": "B"
                },
                {
                    "Id": "25",
                    "Reliability (R)": "5",
                    "Number of links (L)": "18",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "26",
                    "Reliability (R)": "4",
                    "Number of links (L)": "19",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "27",
                    "Reliability (R)": "4",
                    "Number of links (L)": "19",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "28",
                    "Reliability (R)": "4",
                    "Number of links (L)": "19",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "29",
                    "Reliability (R)": "4",
                    "Number of links (L)": "18",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "30",
                    "Reliability (R)": "5",
                    "Number of links (L)": "19",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "Medium",
                    "Class": "B"
                },
                {
                    "Id": "31",
                    "Reliability (R)": "4",
                    "Number of links (L)": "19",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "32",
                    "Reliability (R)": "4",
                    "Number of links (L)": "19",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "33",
                    "Reliability (R)": "4",
                    "Number of links (L)": "17",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "34",
                    "Reliability (R)": "5",
                    "Number of links (L)": "20",
                    "Capacity (Ca)": "High",
                    "Costo (Co)": "High",
                    "Class": "B"
                },
                {
                    "Id": "35",
                    "Reliability (R)": "4",
                    "Number of links (L)": "18",
                    "Capacity (Ca)": "Medium",
                    "Costo (Co)": "High",
                    "Class": "B"
                }
            ]
        }
        `
    return JSON.parse(strJSON);
}

function Form1(){
    getJSON();
    let root = document.getElementById("root");
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    createForm1(root);
}


function createForm1(root){
    //Page title
    let title = document.createElement("h1");
    title.innerText="Formulario 1";
    title.classList.add("title");
    
    //Subtitle
    let subtitle = document.createElement("h2");
    subtitle.innerText = "Yo aprendo...";
    subtitle.classList.add("subtitle");

    // div container
    let container = document.createElement("div");
    container.classList.add("opts-container");

    //div that contains the options of row 1
    let row1 = document.createElement("div");
    row1.appendChild(createOption("discerniendo"));
    row1.appendChild(createOption("ensayando"));
    row1.appendChild(createOption("involucrandome"));
    row1.appendChild(createOption("practicando"));
    row1.classList.add("row");

    //div that contains the options of row 2
    let row2 = document.createElement("div");
    row2.appendChild(createOption("receptivamente"));
    row2.appendChild(createOption("relacionando"));
    row2.appendChild(createOption("analíticamente"));
    row2.appendChild(createOption("imparcialmente"));
    row2.classList.add("row");
    
     //div that contains the options of row 3
     let row3 = document.createElement("div");
     row3.appendChild(createOption("sintiendo"));
     row3.appendChild(createOption("observando"));
     row3.appendChild(createOption("pensando"));
     row3.appendChild(createOption("haciendo"));
     row3.classList.add("row");

     //div that contains the options of row 4
     let row4 = document.createElement("div");
     row4.appendChild(createOption("aceptando"));
     row4.appendChild(createOption("arriegando"));
     row4.appendChild(createOption("evaluando"));
     row4.appendChild(createOption("con cautela"));
     row4.classList.add("row");

    //div that contains the options of row 5
    let row5 = document.createElement("div");
    row5.appendChild(createOption("intuitivamente"));
    row5.appendChild(createOption("productivamente"));
    row5.appendChild(createOption("lógicamente"));
    row5.appendChild(createOption("cuestionando"));
    row5.classList.add("row");

    //div that contains the options of row 6
    let row6 = document.createElement("div");
    row6.appendChild(createOption("abstracto"));
    row6.appendChild(createOption("observando"));
    row6.appendChild(createOption("concreto"));
    row6.appendChild(createOption("activo"));
    row6.classList.add("row");

    //div that contains the options of row 7
    let row7 = document.createElement("div");
    row7.appendChild(createOption("orientado al presente"));
    row7.appendChild(createOption("reflexivamente"));
    row7.appendChild(createOption("orientado al futuro"));
    row7.appendChild(createOption("pragmático"));
    row7.classList.add("row");

    //div that contains the options of row 8  	
    let row8 = document.createElement("div");
    row8.appendChild(createOption("aprendo más de la experiencia"));
    row8.appendChild(createOption("aprendo más de la observación"));
    row8.appendChild(createOption("aprendo más de la conceptualización"));
    row8.appendChild(createOption("aprendo más de la experimentación"));
    row8.classList.add("row");

    //div that contains the options of row 9 	
    let row9 = document.createElement("div");
    row9.appendChild(createOption("emotivo"));
    row9.appendChild(createOption("reservado"));
    row9.appendChild(createOption("racional"));
    row9.appendChild(createOption("abierto"));
    row9.classList.add("row");


    //add rows to container
    container.appendChild(row1);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(row2);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(row3);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(row4);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(row5);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(row6);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(row7);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(row8);
    container.appendChild(document.createElement("hr"))//space between
    container.appendChild(row9);
    container.appendChild(document.createElement("hr"))//space between
    
    
    //button to trigger the calculation
    let button = document.createElement("button");
    button.type= "submit";
    button.innerText = "Calcular"
    button.addEventListener("click",() => calculate1(root));
    button.classList.add("btn-calculate");
    

    //adds childs to the root
    root.appendChild(title); //add title to the root
    root.appendChild(subtitle); //add subtitle to the root
    root.appendChild(container); //add options to the root
    root.appendChild(button); //add button to the root
}


//method that creates a select option
function createOption(name){
    //option
    let opt = document.createElement("div");
    let lbl = document.createElement("h5");
    lbl.innerText = name;
    //options
    let opt_sel = document.createElement("select");
    opt_sel.id = name;
    let opt_1 = document.createElement("option");
    opt_1.innerText = "1";
    opt_1.value = "1"; 
    let opt_2 = document.createElement("option");
    opt_2.innerText = "2";
    opt_2.value = "2";
    let opt_3 = document.createElement("option");
    opt_3.innerText = "3";
    opt_3.value = "3";
    let opt_4 = document.createElement("option");
    opt_4.innerText = "4";
    opt_4.value = "4";

    opt_sel.appendChild(opt_1);
    opt_sel.appendChild(opt_2);
    opt_sel.appendChild(opt_3);
    opt_sel.appendChild(opt_4);

    opt.appendChild(opt_sel);
    opt.appendChild(lbl);

    return opt;
}

//make the euclidean calculation
function calculate1(root){

    let currentType = "";
    let currentDistance;

    let ec = (
        parseInt(document.getElementById("discerniendo").value)+parseInt(document.getElementById("receptivamente").value)+
        parseInt(document.getElementById("sintiendo").value)+parseInt(document.getElementById("aceptando").value)+
        parseInt(document.getElementById("intuitivamente").value)+parseInt(document.getElementById("abstracto").value)+
        parseInt(document.getElementById("orientado al presente").value)+parseInt(document.getElementById("aprendo más de la experiencia").value)+
        parseInt(document.getElementById("emotivo").value)
    );
    let or = (
        parseInt(document.getElementById("ensayando").value)+parseInt(document.getElementById("relacionando").value)+
        parseInt(document.getElementById("observando").value)+parseInt(document.getElementById("arriegando").value)+
        parseInt(document.getElementById("productivamente").value)+parseInt(document.getElementById("observando").value)+
        parseInt(document.getElementById("reflexivamente").value)+parseInt(document.getElementById("aprendo más de la observación").value)+
        parseInt(document.getElementById("reservado").value)
    );
	let ca = (
        parseInt(document.getElementById("involucrandome").value)+parseInt(document.getElementById("analíticamente").value)+
        parseInt(document.getElementById("pensando").value)+parseInt(document.getElementById("evaluando").value)+
        parseInt(document.getElementById("lógicamente").value)+parseInt(document.getElementById("concreto").value)+
        parseInt(document.getElementById("orientado al futuro").value)+parseInt(document.getElementById("aprendo más de la conceptualización").value)+
        parseInt(document.getElementById("racional").value)
    );
	let ea = (
        parseInt(document.getElementById("practicando").value)+parseInt(document.getElementById("imparcialmente").value)+
        parseInt(document.getElementById("haciendo").value)+parseInt(document.getElementById("con cautela").value)+
        parseInt(document.getElementById("cuestionando").value)+parseInt(document.getElementById("activo").value)+
        parseInt(document.getElementById("pragmático").value)+parseInt(document.getElementById("aprendo más de la experimentación").value)+
        parseInt(document.getElementById("abierto").value)
    );

    //evaluate all variables against the JSON
    getJSON()["RecintoEstilo"].map(element => {
        //make the euclidean calc
        let euclidean = Math.sqrt( 
                                    ( ( ca - parseInt(element.CA) ) ^ 2 ) + 
                                    ( ( ec - parseInt(element.EC) ) ^ 2 ) + 
                                    ( ( ea - parseInt(element.EA) ) ^ 2 ) + 
                                    ( ( or - parseInt(element.OR) ) ^ 2 ) 
                                );
        //basically, ask if is the first time or if the current euclidean calc is closer (lower) to the currentDistance temp variable 
        if(currentDistance === undefined || euclidean < currentDistance){
            currentDistance = euclidean;
            currentType = element["Estilo"];
        }                   
    });

    //show the result dinamically in the screen
    let result = document.getElementById("result")
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    let finalStr = document.createElement("h1");
    finalStr.innerText = "Tu estilo de aprendizaje es: "+currentType;
    finalStr.style= "margin-top: 3%;";
    result.appendChild(finalStr);
    window.scrollTo(0,document.body.scrollHeight);//scroll to bottom
}

