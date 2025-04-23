import Express from 'express';

const app =  Express();

app.use (Express.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type');
	next();
});

app.get ('/', (req, res) => {
    res.send("Selamat datang diserver backend saya yak");
});

let KumpulanRoom = [];

/* Mengambil Ruangan */
app.get("/rooms", (req, res) => {
    if (KumpulanRoom.length === 0) {
      return res.status(200).json({
        status: "sukses",
        message: "Belum ada ruangan yang tersedia",
        data: [],
      });
    }
  
    res.json({
      status: "sukses",
      data: KumpulanRoom.map((room) => ({
        id: room.id,
        name: room.name || "No name",
        description: room.description || "No description",
        capacity: room.capacity || 0,
        image: room.image || "No image available",
      })),
    });
  });

  /* Ambil Room Berdasarkan ID */
  app.get("/rooms/:id", (req, res) => {
    const roomId = parseInt(req.params.id);
    const room = KumpulanRoom.find((r) => r.id === roomId);

     if (!room) {
      return res.status(404).json({
        status: "error",
        message: "Room tidak ditemukan",
      });
     }

     res.json({
      status: "success",
      data: {
        id: room.id,
        name: room.name || "No name",
        description: room.description || "No description",
        capacity: room.capacity || 0,
        image: room.image || "No image available",
      }
    });
});
  
/* Menambah Ruangan */
app.post("/rooms", (req, res) => {
    const { name, description, capacity, image } = req.body;
  
    // Validasi input, harus diisi semua
    if (!name || !description || !capacity || !image) {
      return res.status(400).json({
        status: "error",
        message: "Semua field harus diisi",
      });
    }
  
    // Buat ID baru berdasarkan jumlah data
    const newRoom = {
      id: KumpulanRoom.length ? KumpulanRoom[KumpulanRoom.length - 1].id + 1 : 1,
      name,
      description,
      capacity,
      image,
    };
  
    // Simpan ke array
    KumpulanRoom.push(newRoom);
  
    res.status(201).json({
      status: "success",
      message: "Room created successfully",
      data: newRoom,
    });
  });
  
  /*edit Room Berdasarkan ID*/
  app.put("/rooms/:id", (req, res) => {
    const roomId = parseInt(req.params.id);
    const { name, description, capacity, image } = req.body;
    const room = KumpulanRoom.find((r) => r.id === roomId);

    if (!room){
      return res.status(404).json({
        status: "error",
        message: "Room not found",
      });
    }
    if (!name || !description || !capacity || !image){
      return res.status(400).json({
        status: "error",
        message: "Semua field harus diisi",
      });
    }
    room.name = name;
    room.description = description;
    room.capacity = capacity;
    room.image = image;
    res.status(201).json({
      status: "success",
      message: "Room updated successfully",
      data: room,
    });
  });

  /*Hapus Room Berdasarkan ID*/
  app.delete("/rooms/:id", (req, res) => {
    const roomId = parseInt(req.params.id);
    const room = KumpulanRoom.find((r) => r.id === roomId);
    if (!room) {
      return res.status(404).json({
        status: "error",
        message: "Room tidak ditemukan",
      });
    }
    const index = KumpulanRoom.indexOf(room);
    KumpulanRoom.splice(index, 1);
    res.status(201).json({
      status: "success",
      message: "Room deleted successfully",
    });
  });


  let KumpulanBooking = [];

  /* Mengambil Booking */
  app.get("/bookings", (req, res) => {
    if (KumpulanBooking.length === 0) {
      return res.status(200).json({
        status: "sukses",
        message: "Belum ada ruangan yang tersedia",
        data: [],
      });
    }
  
    res.json({
      status: "sukses",
      data: KumpulanBooking.map((book) => ({
        id: book.id,
        name: book.name || "No name",
        contact: book.contact || "No contact",
        room_id: book.room_id || null, // Pastikan room_id ada
        date: book.date || "No date available",
      })),
    });
  });
  


  /* Ambil Booking Berdasarkan ID */
  app.get("/bookings/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
  
    // Cari booking berdasarkan ID
    const book = KumpulanBooking.find((b) => b.id === bookId);
  
    // Jika tidak ditemukan, kirim response error
    if (!book) {
      return res.status(404).json({
        status: "error",
        message: "Booking tidak ditemukan",
      });
    }
  
    // Jika ditemukan, kirim response dengan detail booking
    res.json({
      status: "success",
      data: {
        id: book.id,
        name: book.name || "No name",
        contact: book.contact || "No contact",
        room_id: book.room_id || null, // Pastikan room_id ada
        date: book.date || "No date available",
      },
    });
  });  

/* Menambah Booking */
app.post("/bookings", (req, res) => {
  const { name, contact, room_id, date } = req.body;

  // Validasi input, harus diisi semua
  if (!name || !contact || !room_id || !date) {
    return res.status(400).json({
      status: "error",
      message: "Semua field harus diisi",
    });
  }

  // Buat ID baru berdasarkan jumlah data
  const newBook = {
    id: KumpulanBooking.length ? KumpulanBooking[KumpulanBooking.length - 1].id + 1 : 1,
    name,
    contact,
    room_id,
    date,
  };

  // Simpan ke array
  KumpulanBooking.push(newBook);

  res.status(201).json({
    status: "success",
    message: "Book created successfully",
    data: newBook,
  });
});

app.listen (3000, () => {
    console.log('Server is running on port 3000');
});