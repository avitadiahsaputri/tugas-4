import Album from './components/Album';



const App = () => {
  const albums = [
    {
      nama: "HE NOT YOU",
      gambar:
        "https://imgx.sonora.id/crop/0x0:0x0/700x465/photo/2023/04/19/berikut-adalah-lirik-lagu-photob-20230419085722.jpg",
      deskripsi:
        "lagu Not You milik Alan Walker ini menceritakan tentang seseorang yang belum bisa move on dari mantan kekasihnya, meski dia kini sudah bertemu orang yang baru.",
    },
    {
      nama: "CAR'S OUTSIDE",
      gambar:
        "https://t-2.tstatic.net/jogja/foto/bank/images/Lirik-Lagu-dan-Terjemahan-Cars-Outside-James-Arthur-Im-Not-Gettin-in-The-Addison-Lee.jpg",
      deskripsi:
        "Lagu Car's Outside milik James Arthur ini merupakan bentuk curahan hati sepasang kekasih yang harus LDR-an karena jarak dan waktu memisahkan mereka",
    },
    {
      nama: "ANGELS LIKE YOU",
      gambar: "https://i.ytimg.com/vi/GFAFTXQcmew/maxresdefault.jpg",
      deskripsi:
        "Lagu Angels Like You milik Miley Cyrus ini  menceritakan tentang harapan seseorang untuk tidak dipertemukan lagi dengan mantan kekasih yang masih dia cintai.",
    },
  ];
  return (
    albums.map(( v) =>{
      return (
        <Album
          key={v}
          gambar={v.gambar}
          namaAlbums={v.nama}
          deskripsi={v.deskripsi}
        />
      );
    }
  )
  )
}

export default App