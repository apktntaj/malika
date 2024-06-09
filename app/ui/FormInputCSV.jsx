const FormInputCSV = () => {
  return (
    <form className="mt-5 w-4/5 mx-auto pl-6 text-center">
      <input type="file" placeholder="Masukkan file csv" />
      <button
        className="bg-cyan-500 hover:bg-cyan-400 rounded-md px-4 py-1 text-gray-100 shadow-md"
        type="submit"
      >
        Submit
      </button>
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
