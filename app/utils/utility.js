import axios from "axios";
import * as XLSX from "xlsx";

/**
 * Converts a file object to an ArrayBuffer.
 * @param {File} files - The file object to convert.
 * @returns {Promise<ArrayBuffer>} A promise that resolves with the converted ArrayBuffer.
 */

export function arrayBuffer(files) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (e) => {
      reject(e);
    };
    reader.readAsArrayBuffer(files);
  });
}

/**
 * Converts a buffer containing Excel data to JSON format.
 * @param {Buffer} buffer - The buffer containing the Excel data.
 * @returns {Array} - The JSON data extracted from the Excel sheet.
 */
export function convertBufferToJson(buffer) {
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  console.log(jsonData);
  return jsonData;
}

export async function dataInsw(item) {
  let hsCode = item["HS Code"].toString();

  try {
    const response = await axios.get(
      `https://api.insw.go.id/api-prod-ba/ref/hscode/komoditas?hs_code=${hsCode}`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          authorization: "Basic aW5zd18yOmJhYzJiYXM2",

          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: null,
        method: "GET",
      }
    );

    // const html = response.data;
    // const data = html.data[0];

    // // TARIF
    // item["BM"] = data["new_mfn"][0]["bm"][0]["bm"];
    // item["PPN"] = data["new_mfn"][0]["ppn"][0]["ppn"];
    // item["PPH"] = data["new_mfn"][0]["pph"][0]["pph"];

    // // LARTAS
    // item["lartas_import"] = data.import_regulation.length ? "Ada" : "-";
    // item["lartas_border"] = data.import_regulation_border.length ? "Ada" : "-";
    // item["lartas_post_border"] = data.import_regulation_post_border.length
    //   ? "Ada"
    //   : "-";
    // item["lartas_export"] = data.export_regulation.length ? "Ada" : "-";
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("wkwk", error);
  }
}

export function isValidFormat(str) {
  const pattern = /^\d+$/; // regular expression for numbers only
  return pattern.test(str) && str.length === 8; // returns true if str contains only numbers, false otherwise
}
