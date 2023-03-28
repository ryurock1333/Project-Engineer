import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "id", label: "รหัส", minWidth: 50 },
  { id: "name", label: "ชื่อ - นามสกุล", minWidth: 100 },
  { id: "nickname", label: "ชื่อเล่น", minWidth: 50, align: "left" },
  { id: "ภาควิชา", label: "ภาควิชา", minWidth: 50, align: "left" },
  { id: "ที่อยู่", label: "ที่อยู่", minWidth: 200, align: "left" },
  {
    id: "โทรศัพท์หนึ่ง",
    label: "โทรศัพท์1",
    minWidth: 50,
    align: "left",
  },
  { id: "มือถือ", label: "มือถือ", minWidth: 50, align: "left" },
  { id: "เพจเจอร์", label: "เพจเจอร์", minWidth: 50, align: "left" },
  { id: "บริษัท", label: "บริษัท", minWidth: 100, align: "left" },
  {
    id: "ที่อยู่บริษัท",
    label: "ที่อยู่บริษัท",
    minWidth: 200,
    align: "left",
  },
  { id: "โทรศัพท์สอง", label: "โทรศัพท์2", minWidth: 100, align: "left" },
  { id: "Fax", label: "Fax", minWidth: 50, align: "left" },
  { id: "Note", label: "Note", minWidth: 50, align: "left" },
];

function createData(
  id,
  name,
  nickname,
  ภาควิชา,
  ที่อยู่,
  โทรศัพท์หนึ่ง,
  มือถือ,
  เพจเจอร์,
  บริษัท,
  ที่อยู่บริษัท,
  โทรศัพท์สอง,
  Fax,
  Note
) {
  const density = nickname / ภาควิชา;
  return {
    id,
    name,
    nickname,
    ภาควิชา,
    ที่อยู่,
    โทรศัพท์หนึ่ง,
    มือถือ,
    เพจเจอร์,
    บริษัท,
    ที่อยู่บริษัท,
    โทรศัพท์สอง,
    Fax,
    Note,
  };
}

const rows = [
  createData(
    "3206001",
    "กรัณย์ ตันทัศน์",
    "ป๋อง",
    "โยธา",
    "563/3 ต.ช้างเผือก อ.เมือง จ.เชียงใหม่",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ),
  createData(
    "3206002",
    "กรี ลาภเดโช",
    "กรี",
    "ไฟฟ้า",
    "หอพัก staff village โรงกรองน้ำมหาสวัสดิ์ ก.ป.น. ถนนตลิ่งชันสุพรรณบุรี ต.ปลายบาง อ.บากรวย นนทบุรี",
    "",
    "01-6248259",
    "",
    "บ. อาควาไทย จก. (เครืออิตัลไทย)",
    "2013 อาคารอิตัลไทย ชั้น 5 เพชรบุรีตัดใหม่ กทม.",
    "",
    "",
    ""
  ),
  createData(
    "3206004",
    "กฤษฎา กิ้มเล้ง",
    "ตึ้ง",
    "เครื่องกล",
    "219 ถนนนครใน อ.เมือง จ.สงขลา"
  ),
  createData(
    "3206005",
    "กฤษดา ปูรณัน",
    "ปาล์ม",
    "สิ่งแวดล้อม",
    "111/351 ม.5 ต.สายไหม อ.สายไหม กทม.10220",
    "532-0070",
    "",
    "1188-7115008",
    "Italian-Thai Development",
    "",
    "6177100-3, 6178132-5"
  ),
  createData(
    "3206007",
    "ก้องกริต วังแก้ว",
    "ก้อง",
    "โยธา",
    "19/1 ต.ล้อมแรด อ.เถิน จ.ลำปาง"
  ),
  createData(
    "3206008",
    "กัลป์ อินทร",
    "กัลป์",
    "เครื่องกล",
    "6 ถนนชัยภูมิ ต.ช้างม่อย อ.เมือง จ.เชียงใหม่"
  ),
  createData(
    "3206010",
    "กิติ แซ่ลิ้ม",
    "เต้",
    "เครื่องกล",
    "13/1 ต.หนองหลวง อ.ท่าตะโก จ.นครสวรรค์"
  ),
  createData(
    "3206011",
    "กิตติกร อูรุวรรณกุล",
    "ต้อม",
    "โยธา",
    "227/128 ถนนบรมไตรโลกนาถ อ.เมือง จ.พิษณุโลก"
  ),
  createData(
    "3206012",
    "กิตติชัย นิ่มวิบูลย์สม",
    "เชน",
    "ไฟฟ้า",
    "39 ถนนจรดวิถีส่อง อ.สวรรคโลก จ.สุโขทัย"
  ),
  createData(
    "3206013",
    "กิตติพงษ์ พงษ์รูป",
    "เป้",
    "โยธา",
    "12/1 ต.หงรัตนชัย อ.อยุธยา จ.อยุธยา"
  ),
  createData(
    "3206014",
    "กิตติพงษ์ โพธิ์ธรานนท์",
    "กิต",
    "ไฟฟ้า",
    "74/474 ถนนซอยสัมฤทธิ์พัฒนา ต.ท่าทราย อ.เมือง จ.นนทบุรี",
    "5894676",
    "",
    "",
    "บ.สยามอุตสาหกรรมวัสดุทนไฟ จก.",
    "โรงงานผลิตวัสดุทนไฟ ท่าหลวง สระบุรี 18270",
    "(036)287000 ต่อ 8851,8856",
    "(036)281234"
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
