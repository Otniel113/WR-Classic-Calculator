function cekValid(){
    var wr_total = document.getElementById("wr-total").value;
    var match_total = document.getElementById("match-total").value;
    var wr_ranked = document.getElementById("wr-ranked").value;
    var match_ranked = document.getElementById("match-ranked").value;

    if (wr_total === "" || match_total === "" || wr_ranked === "" || match_ranked === ""){
        alert("Inputan masih ada yang kosong");
    }else{
        if (isNaN(wr_total) || isNaN(match_total) || isNaN(wr_ranked) || isNaN(match_ranked)) {
            alert("Harus memasukkan angka");
        }else{
            if ((wr_total < 0 || wr_total > 100) || (wr_ranked < 0 || wr_ranked > 100)){
                alert("Tolong masukkan WR dari 0 sampai 100");
            }else if (match_total < 0 || match_ranked < 0){
                alert("Tolong masukkan banyak match 0 atau lebih besar");
            }
            else{
                if (Number(match_total) < Number(match_ranked)){
                    alert("Pastikan jumlah match total lebih banyak dari match ranked");
                }
                else{
                    var output = hitungWR(wr_total, match_total, wr_ranked, match_ranked);
                    alert(output);
                }
            }
        }
    }
}

function hitungWR(wr_total, match_total, wr_ranked, match_ranked){
    var match_classic = match_total - match_ranked
    var win_total = Math.round(wr_total/100 * match_total);
    var win_ranked = Math.round(wr_ranked/100 * match_ranked);
    var win_classic = win_total - win_ranked;
    var wr_classic = win_classic / match_classic * 100;
    if (wr_classic > 100){
        return("Hasil tidak mungkin karena win rate >100%, yaitu " + wr_classic.toFixed(2) + "%");
    }
    else{
        return ("Anda Memiliki WR Classic = " + wr_classic.toFixed(2) + "% dengan banyak match = " + match_classic);
    }
}