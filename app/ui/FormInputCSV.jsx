import { writeFile } from "fs/promises";
import { join } from "path";
import { publicPath } from "../utils/fs";

const FormInputCSV = async () => {
  async function upload(data) {
    "use server";

    const file = data.get("file");

    if (!file) {
      throw new Error("No file uploaded");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join(publicPath, "public", file.name);
    await writeFile(path, buffer);
    console.log(`Open ${path} to see the uploaded file`);

    return { success: true };
  }

  return (
    <form action={upload} className="mt-5 w-4/5 mx-auto pl-6 text-center">
      <input type="file" name="file" />
      <input
        type="submit"
        value="upload"
        className="bg-cyan-500 hover:bg-cyan-400 rounded-md px-4 py-1 text-gray-100 shadow-md"
      />

      <p className="mt-2 pl-2">Haven't already template file?</p>
      <p>
        Click
        <a href="template.xlsx" download>
          <span className="text-orange-500"> here</span>
        </a>
      </p>
    </form>
  );
};

export default FormInputCSV;
