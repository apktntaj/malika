import { getDataColumInSheet } from "../utils/excel";

const HSCodeTable = () => {
  // Ambil data dari BUP

  return (
    <div className="overflow-x-auto h-96 w-4/5 mx-auto">
      <table className="table table-xs">
        <thead>
          <tr className="text-xl">
            <th>NO</th>
            <th>NAMA BARANG</th>
            <th>HS CODE</th>
            <th>BM</th>
            <th>LARTAS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
            <td>China</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Rowe-Schoen</td>
            <td>Russia</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Yancy Tear</td>
            <td>Community Outreach Specialist</td>
            <td>Wyman-Ledner</td>
            <td>Brazil</td>
          </tr>
          <tr>
            <th>6</th>
            <td>Irma Vasilik</td>
            <td>Editor</td>
            <td>Wiza, Bins and Emard</td>
            <td>Venezuela</td>
          </tr>
          <tr>
            <th>7</th>
            <td>Meghann Durtnal</td>
            <td>Staff Accountant IV</td>
            <td>Schuster-Schimmel</td>
            <td>Philippines</td>
          </tr>
          <tr>
            <th>8</th>
            <td>Sammy Seston</td>
            <td>Accountant I</td>
            <td>O'Hara, Welch and Keebler</td>
            <td>Indonesia</td>
          </tr>
          <tr>
            <th>9</th>
            <td>Lesya Tinham</td>
            <td>Safety Technician IV</td>
            <td>Turner-Kuhlman</td>
            <td>Philippines</td>
          </tr>
          <tr>
            <th>10</th>
            <td>Zaneta Tewkesbury</td>
            <td>VP Marketing</td>
            <td>Sauer LLC</td>
            <td>Chad</td>
          </tr>
          <tr>
            <th>11</th>
            <td>Andy Tipple</td>
            <td>Librarian</td>
            <td>Hilpert Group</td>
            <td>Poland</td>
          </tr>
          <tr>
            <th>12</th>
            <td>Sophi Biles</td>
            <td>Recruiting Manager</td>
            <td>Gutmann Inc</td>
            <td>Indonesia</td>
          </tr>
          <tr>
            <th>13</th>
            <td>Florida Garces</td>
            <td>Web Developer IV</td>
            <td>Gaylord, Pacocha and Baumbach</td>
            <td>Poland</td>
          </tr>
          <tr>
            <th>14</th>
            <td>Maribeth Popping</td>
            <td>Analyst Programmer</td>
            <td>Deckow-Pouros</td>
            <td>Portugal</td>
          </tr>
          <tr>
            <th>15</th>
            <td>Moritz Dryburgh</td>
            <td>Dental Hygienist</td>
            <td>Schiller, Cole and Hackett</td>
            <td>Sri Lanka</td>
          </tr>
          <tr>
            <th>16</th>
            <td>Reid Semiras</td>
            <td>Teacher</td>
            <td>Sporer, Sipes and Rogahn</td>
            <td>Poland</td>
          </tr>
          <tr>
            <th>17</th>
            <td>Alec Lethby</td>
            <td>Teacher</td>
            <td>Reichel, Glover and Hamill</td>
            <td>China</td>
          </tr>
          <tr>
            <th>18</th>
            <td>Aland Wilber</td>
            <td>Quality Control Specialist</td>
            <td>Kshlerin, Rogahn and Swaniawski</td>
            <td>Czech Republic</td>
          </tr>
          <tr>
            <th>19</th>
            <td>Teddie Duerden</td>
            <td>Staff Accountant III</td>
            <td>Pouros, Ullrich and Windler</td>
            <td>France</td>
          </tr>
          <tr>
            <th>20</th>
            <td>Lorelei Blackstone</td>
            <td>Data Coordiator</td>
            <td>Witting, Kutch and Greenfelder</td>
            <td>Kazakhstan</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default HSCodeTable;
