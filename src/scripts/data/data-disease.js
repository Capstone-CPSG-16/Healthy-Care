
const penyakit = [
    {
        nama: 'Bufthalmus',
        gejala: ['Kornea membengkak bewarna keruh'],
        info: 'Bufthalmus merupakan istilah yang digunakan untuk menggambarkan kondisi terjadinya pembesaran bola mata, Kondisi ini sering kali ditemukan pada anak-anak sejak lahir hingga usia tiga tahun. Istilah lain yang dapat digunakan untuk menggambarkan keadaan ini adalah ox eye atau mata sapi. Bufthalmus dapat ditemukan pada salah satu atau kedua bola mata. Pada sekitar 75 persen kasus, pembesaran bola mata dapat ditemukan pada kedua mata.',
        saran: 'penurunan tekanan bola mata perlu dilakukan dengan cara pembedahan, seperti geniotomy dan trabeculotomy. Pembedahan diharapkan melancarkan aliran cairan dalam mata (aqueous humour) sehingga dapat menurunkan tekanan bola mata. Terapi dengan obat-obatan umumnya diberikan bersamaan dengan tindakan pembedahan. Obat-obatan yang mungkin diberikan antara lain carbonic anhydrase inhibitor, beta-bloker, dan analog prostaglandin. Pemeriksaan kembali terhadap efek pengobatan sebaiknya dilakukan dalam 1-2 minggu setelah pemakaian.'
    },
    {
        nama: 'Blefaritis',
        gejala: ['Mata merah', 'Nyeri', 'Gatal', 'Berair', 'Ada luka bagian kelopak mata dan membengkak'],
        info: 'Blefaritis adalah peradangan di kelopak mata yang menyebabkan bagian tersebut menjadi bengkak, kemerahan, dan berminyak. Blefaritis biasanya terjadi ketika kelenjar minyak di dekat akar bulu mata tersumbat. Penyumbatan inilah yang menjadi salah satu penyebab peradangan di kelopak mata.',
        saran: 'Penanganan awal blefaritis dapat dilakukan di rumah. Penderita blefaritis bisa mengompres mata dengan kompres basah yang hangat minimal selama 1 menit. Cara ini bertujuan untuk melunakkan kerak kotoran mata dan mencegah endapan minyak di kelopak mata. Penderita juga bisa membersihkan kelopak mata menggunakan sampo bayi dan air hangat. Sambil membersihkannya, pijatlah kelopak mata secara perlahan dengan jari atau kain yang lembut. Hal tersebut berguna untuk menghilangkan kotoran mata dan mengurangi pembengkakan.'
    },
    {
        nama: 'Dakriosistitis',
        gejala: ['Mata merah', 'Nyeri', 'Mengeluarkan nanah', 'Penderita mengalami demam',],
        info: 'Dakriosistitis adalah infeksi bakteri atau fungal pada sakus nasolakrimal, yang disebabkan obstruksi pada duktus nasolakrimal dan stasis air mata pada sistem drainase lakrimal. Gejala akut dapat berupa edema, eritema, dan nyeri di area kantus medial',
        saran: 'Penderita disarankan untuk rutin melakukan kompres hangat pada kelopak mata dan area kantus medial beberapa kali sehari selama 1-2 menit. Setelah melakukan kompres hangat dapat dilanjutkan dengan pemijatan menggunakan jari telunjuk dari arah sudut dalam mata ke arah hidung.',
    },
    {
        nama: 'Endoftalmitis',
        gejala: ['Mata merah', 'Nyeri', 'Mengalami gangguan penglihatan mata'],
        info: 'Endoftalmitis adalah peradangan berat yang terjadi pada seluruh jaringan intraocular yang mengenai dua dinding bola mata, yaitu retina dan koroid tanpa melibatkan sklera dan kapsula tenon. Hal ini biasanya terjadi akibat adanya infeksi.',
        saran: 'Untuk melakukan pencegahan terhadap endoftalmitis yang disebabkan oleh trauma mata, bisa menggunakan pelindung mata seperti kacamata pelindung. Untuk melakukan pencegahan terhadap endoftalmitis yang disebabkan oleh trauma mata, bisa menggunakan pelindung mata seperti kacamata pelindung.'
    },
    {
        nama: 'Glaukoma',
        gejala: ['Pandangan mulai kabur'],
        info: 'Glaukoma adalah kerusakan pada saraf mata akibat tingginya tekanan di dalam bola mata. Kondisi ini ditandai dengan nyeri di mata, mata merah, penglihatan kabur, serta mual dan muntah. Glaukoma perlu segera ditangani untuk mencegah terjadinya kebutaan.',
        saran: 'Pemeriksaan dan penanganan mata rutin dapat menghindari risiko kebutaan pada penderita glaukoma. Metode pengobatannya tergantung kondisi pasien dan tingkat keparahan glaukoma yang diderita. Glaukoma tidak selalu dapat dicegah, tetapi ada upaya yang dapat dilakukan untuk menjaga kesehatan mata, antara lain: Mengonsumsi makanan sumber antioksidan, vitamin A, dan vitamin C, Membatasi konsumsi minuman berkafein, Memosisikan bantal sedikit lebih tinggi saat tidur, Berolahraga secara rutin'
    },
    {
        nama: 'Strabismus (mata juling)',
        gejala: ['Mata juling (bersilang)', 'Penglihatan ganda'],
        info: 'Strabismus atau mata juling adalah kondisi saat posisi kedua mata tidak sejajar dan keduanya bergerak ke arah yang berbeda. Pada kondisi ini, salah satu mata biasanya mengarah depan, tapi mata yang lain bisa melihat ke samping, atas, atau bawah.',
        saran: 'Berikut adalah beberapa pilihan pengobatan untuk mata juling: Mengggunakan kacamata atau lensa kontak, terutama jika terdapat gangguan penglihatan lain seperti rabun dekat., Penggunaan lensa prisma, yaitu lensa yang lebih tebal untuk mengurangi pergerakan mata yang sulit untuk fokus melihat ke satu arah., Menggunakan penutup mata yang dipakai untuk menutup bagian mata yang berfungsi paling baik., Injeksi botulinum toxin atau botox yang disuntikkan pada salah satu otot permukaan mata., Terapi otot mata untuk melatih fokus penglihatan dan meningkatkan koordinasi pergerakan otot mata., Operasi untuk memperbaiki kerusakan otot mata dengan mengubah bentuk atau posisi otot mata.',
    },
    {
        nama: 'Iridosiklitis',
        gejala: ['Mata merah', 'Nyeri', 'Tanpa kotoran, penglihatan agak terganggu'],
        info: 'Iridosiklitis adalah kondisi ketika bagian iris mata (bagian berwarna mata) dan badan siliaris (otot dan jaringan yang terlibat dalam memfokuskan mata) meradang. Kondisi ini juga biasa disebut iritis atau uveitis anterior.',
        saran: 'Pengobatan iridosiklitis dirancang untuk menjaga penglihatan dan menghilangkan rasa sakit dan peradangan. Untuk kondisi yang terkait dengan penyakit tertentu yang mendasarinya, pengobatan kondisi tersebut juga diperlukan. Umumnya,pengobatan untuk iridosiklitis adalah: Obat tetes mata steroid, Obat tetes mata untuk melebarkan pupil.'
    },
    {
        nama: 'Infeksi mata',
        gejala: ['Banyak kotoran yang lengket di bulu mata'],
        info: 'Infeksi mata adalah penyakit yang terjadi ketika ada bakteri, jamur, parasit, atau virus yang menginfeksi mata. Infeksi dapat menyerang salah satu atau kedua mata. Ada berbagai jenis infeksi mata yang dibedakan berdasarkan penyebab infeksi dan bagian mata yang terinfeksi.',
        saran: 'tindakan yang paling tepat adalah langsung menemui dokter ahli mata yang dapat memeriksa kondisi Anda dan memberikan pengobatan yang sesuai. Pemeriksaan infeksi mata biasanya membutuhkan pemeriksaan mata sederhana, di mana dokter mata akan menggunakan alat bercahaya untuk memeriksa kornea dan retina. Pada kasus di mana ada zat yang keluar dari mata, dokter mata akan mengambil sampel zat yang akan diperiksa untuk mengetahui jenis infeksi.',        
    },
    {
        nama: 'Katarak',
        gejala: ['Penglihatan Buram', 'Sensitivitas kontras hilang'],
        info: 'Katarak adalah suatu penyakit ketika lensa mata menjadi keruh dan berawan. Pada umumnya, katarak berkembang perlahan dan awalnya tidak terasa mengganggu. Namun, lama-kelamaan, katarak akan mengganggu penglihatan dan membuat pengidap merasa seperti melihat jendela berkabut, sulit menyetir, membaca, serta melakukan aktivitas sehari-hari.',
        saran: 'Jika katarak tidak terlalu mengganggu, kamu mungkin hanya perlu mengenakan kacamata baru untuk membantu kamu melihat lebih baik. Jika katarak menyebabkan penglihatan semakin memburuk dan sulit menjalani aktivitas sehari-hari, prosedur operasi merupakan pengobatan yang bisa dilakukan untuk mengatasi masalah mata tersebut.'
    },
    {
        nama: 'Hordeolum',
        gejala: ['Nyeri', 'Nyeri bila ditekan (pada kelopak mata)'],
        info: 'Bintitan atau hordeolum adalah kondisi ketika bintil menyakitkan mirip jerawat atau bisul tumbuh di tepi kelopak mata. Bintitan umumnya disebabkan oleh infeksi bakteri dan biasanya hanya muncul pada salah satu kelopak mata.',
        saran: 'Sebagian besar bintitan bisa sembuh dengan sendirinya dalam waktu 7–21 hari, terutama bila bintitan telah pecah dan mengeluarkan nanah. Namun, jangan pernah memencet atau memecahkan bintitan sendiri, karena dapat memicu penyebaran infeksi.'
    },
    {
        nama: 'Eksoftalmus',
        gejala: ['Salah satu bola mata nampak menonjol'],
        info: 'Eksoftalmus adalah penonjolan bola mata karena terkait hormon (biasanya hipertiroid). Kata eksoftalmus berasal dari bahasa Yunani yang artinya mata yang menonjol. Hal ini bisa terjadi pada satu ataupun kedua mata.',
        saran: 'Jika terdapat tumor yang tumbuh di belakang mata, maka tumor tersebut perlu diambil. Jika penyebabnya adalah penyakit Graves, kemungkinan pengobatan adalah untuk mengatasi kondisi hipertiroid yang terlalu aktif. Menjaga mata bagian depan untuk tetap lembap juga diperlukan jika kelopak mata tidak bisa menutup.'
    },
    {
        nama: 'Konjungtivitis',
        gejala: ['Mata merah', 'Nyeri', 'Gatal', 'Berair', 'Keluar kotoran'],
        info: 'Konjungtivitis adalah mata merah akibat peradangan pada selaput yang melapisi permukaan bola mata dan kelopak mata bagian dalam (konjungtiva mata). Selain mata merah, konjungtivitis dapat disertai rasa gatal pada mata dan mata berair.',
        saran: 'Konjungtivitis bakteri diatasi dengan antibiotik, sedangkan konjungtivitis alergi diatasi dengan obat antialergi. Sementara konjungtivitis virus tidak memerlukan pengobatan khusus karena akan sembuh dengan sendirinya. Namun, dokter dapat memberikan obat tetes mata untuk meredakan gejala. Penderita juga dapat menggunakan cara alami untuk mengobati sakit mata, seperti mengompres mata dengan air hangat atau air dingin.'
    },
    {
        nama: 'Trakoma',
        gejala: ['Kornea membengkak bewarna keruh', 'Mata merah', 'Ada luka bagian kelopak mata dan membengkak', 'Pembekakan kelopak mata', 'Kelenjar getah bening', 'Keluar kotoran'],
        info: 'Trakoma adalah infeksi mata akibat bakteri Chlamydia trachomatis. Seseorang dapat tertular penyakit ini jika kontak langsung dengan mata atau hidung penderita, atau menyentuh mata setelah memegang benda yang telah terpapar bakteri tersebut.',
        saran: 'Penanganan trakoma tergantung pada tingkat keparahannya. Adapun metodenya akan berfokus pada pemberian antibiotik dan tindakan bedah. Namun, untuk membantu penyembuhan, pasien juga perlu menjalani metode pengobatan lainnya. Pada trakoma tahap awal, pasien akan diberikan antibiotik berupa azithromycin, tetracycline, doxycycline, serta sulfonamide. Jika trakoma sudah mencapai tingkat lanjut, dokter akan menjalankan bedah untuk mencegah kebutaan, terutama jika pasien sudah masuk dalam tahap trichiasis.'
    },
    {
        nama: 'Presbiopi',
        gejala: ['Tiba tiba tidak bisa melihat benda jarak jauh/dekat'],
        info: 'Presbiopi adalah kondisi ketika mata secara bertahap kehilangan kemampuan untuk fokus melihat objek jarak dekat. Kondisi ini terjadi secara alami sebagai bagian dari proses penuaan.',
        saran: 'Pengobatan presbiopi bertujuan untuk membantu mata agar dapat fokus pada objek jarak dekat. Beberapa metode untuk mengatasi presbiopi adalah: Penggunaan kacamata, Penggunaan lensa kontak, Bedah refraktif, Implan lensa, Inlay kornea',
    },
    {
        nama: 'Xerophtalmia',
        gejala: ['Mata merah', 'Nyeri', 'Kelopak mata menjadi tebal'],
        info: 'Xerophthalmia adalah penyakit mata akibat kekurangan vitamin A yang ditandai dengan mata kering. Jika tidak ditangani, penyakit ini dapat berkembang makin parah seiring berjalannya waktu, bahkan hingga menyebabkan kebutaan.',
        saran: 'Pada tahap awal pengobatan, dokter akan memberikan suplemen vitamin A, baik yang diminum atau disuntikkan ke tubuh pasien. Pemberian vitamin A lebih diutamakan untuk diberikan kepada pasien yang sudah didiagnosis menderita rabun ayam atau rabun senja (night blindness). Jika xerophthalmia menyebabkan kornea rusak, dokter akan memberikan antibiotik untuk mencegah infeksi selanjutnya. Mata pasien juga mungkin akan ditutup untuk melindungi mata hingga luka lepuh yang diderita benar-benar sembuh.'
    },
    {
        nama: 'Ablasio',
        gejala: ['Mengalami gangguan penglihatan mata', 'Pandangan mulai kabur',],
        info: 'Ablasio retina adalah salah satu penyakit mata yang kerap menjadi kekhawatiran banyak orang. Sebab, kondisi berupa terlepasnya retina atau selaput jala dari posisi aslinya ini bisa membuat mata buta secara permanen.',
        saran: 'Dokter umumnya menjalankan prosedur operasi untuk mengatasi ablasio retina. Tanpa operasi, ada risiko tinggi pasien ablasio mengalami kehilangan penglihatan total. Terdapat setidaknya lima jenis operasi penanganan ablasio retina, yakni: Laser atau fotokuagulasi, Cryosurgery, Scleral buckling, Vitrektomi, Pneumatic retinopexy.  Dokter akan memilih metode operasi yang tepat sesuai dengan kondisi yang dialami setiap pasien. Sebab, tidak semua kondisi ablasio yang dialami sama. Begitu pula jenisnya.'
    },
];

export default penyakit;