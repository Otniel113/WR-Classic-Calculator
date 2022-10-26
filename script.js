//Validasi Waktu
function ValidasiTime(time) {
    var re = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gm;
    return re.test(time);
  }
  
  function jam(time) {
    var text;
    if ((time >= "10:00") & (time <= "10:59")) {
      text = 10;
    } else if ((time >= "11:00") & (time <= "11:59")) {
      text = 11;
    } else if ((time >= "12:00") & (time <= "12:59")) {
      text = 12;
    } else if ((time >= "13:00") & (time <= "13:59")) {
      text = 1;
    } else if ((time >= "14:00") & (time <= "14:59")) {
      text = 2;
    } else if ((time >= "15:00") & (time <= "15:59")) {
      text = 3;
    } else if ((time >= "16:00") & (time <= "16:59")) {
      text = 4;
    } else if ((time >= "17:00") & (time <= "17:59")) {
      text = 5;
    } else if ((time >= "18:00") & (time <= "18:59")) {
      text = 6;
    } else if ((time >= "19:00") & (time <= "19:59")) {
      text = 7;
    } else if ((time >= "20:00") & (time <= "20:59")) {
      text = 8;
    } else if ((time >= "21:00") & (time <= "21:59")) {
      text = 9;
    } else if ((time >= "22:00") & (time <= "22:59")) {
      text = 10;
    } else if ((time >= "23:00") & (time <= "23:59")) {
      text = 11;
    } else if ((time >= "00:00") & (time <= "00:59")) {
      text = 12;
    }
    return text;
  }
  
  function Validasi() {
    let time = document.forms["Validasitime"]["jam"].value;
    if (time === "") {
      alert("jam kosong");
    } else if (time.length != 5) {
      alert("format jam salah");
    } else if (!ValidasiTime(time)) {
      alert("jam salah");
    } else if ((time >= "00:00") & (time <= "00:59")) {
      let messagealert =
        " Jam " + jam(time) + " Malam " + "lewat " + time.substr(3, 2) + " Menit ";
      alert(messagealert);
    } else if ((time >= "01:00") & (time <= "03:59")) {
      let messagealert =
        " Jam " + time.substr(1, 1) + " Malam " + "lewat " + time.substr(3, 2) + " Menit ";
      alert(messagealert);
    } else if ((time >= "04:00") & (time <= "09:59")) {
      let messagealert =
        " Jam " + time.substr(1, 1) + " Pagi " + "lewat " + time.substr(3, 2) + " Menit ";
      alert(messagealert);
    } else if ((time >= "10:00") & (time <= "10:59")) {
      let messagealert =
        " Jam " + jam(time) + " Pagi " + "lewat " + time.substr(3, 2) + " Menit ";
      alert(messagealert);
    } else if ((time >= "11:00") & (time <= "14:59")) {
      let messagealert =
        " Jam " + jam(time) + " Siang " + "lewat " + time.substr(3, 2) + " Menit ";
      alert(messagealert);
    } else if ((time >= "15:00") & (time <= "18:59")) {
      let messagealert =
        " Jam " + jam(time) + " Sore " + "lewat " + time.substr(3, 2) + " Menit ";
      alert(messagealert);
    } else if ((time >= "19:00") & (time <= "23:59")) {
      let messagealert =
        " Jam " + jam(time) + " Malam " + "lewat " + time.substr(3, 2) + " Menit ";
      alert(messagealert);
    } else {
      alert("unknown error");
    }
  }
  
  //Comment
  values = [];
  
  function addRecord() {
    var inp = document.getElementById("inputtext");
    values.push(inp.value);
    inp.value = "";
    document.getElementById("values").innerHTML = values.reverse().join("\n");
  }