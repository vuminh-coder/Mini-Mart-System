const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// In-memory database
let products = [
    {
      id: 1,
      name: "Mì tôm Hảo Hảo",
      price: 5000,
      stock: 200,
      category: "Đồ ăn",
      image: "https://acecookvietnam.vn/wp/wp-content/uploads/2025/10/3D-CANXI-2025-TCC-768x598-1.webp",
      description: "Mì ăn liền Hảo Hảo vị tôm chua cay, gói 75g. Sản phẩm bán chạy nhất.",
    },
    {
      id: 2,
      name: "Nước suối Lavie",
      price: 6000,
      stock: 150,
      category: "Đồ uống",
      image: "https://lavieviva.vn/wp-content/uploads/2020/08/nuoc-lavie-PRESTIGE-700ml.png",
      description: "Nước khoáng thiên nhiên Lavie, chai 500ml. Thanh khiết từ nguồn nước thiên nhiên.",
    },
    {
      id: 3,
      name: "Bánh Oreo",
      price: 12000,
      stock: 80,
      category: "Bánh kẹo",
      image: "https://cdn.tgdd.vn/Products/Images/3357/79860/bhx/banh-quy-nhan-kem-vani-oreo-goi-1196g-202301311524404090.jpg",
      description: "Bánh quy Oreo nhân kem vani, gói 133g. Ngon tuyệt vời cho mọi lứa tuổi.",
    },
    {
      id: 4,
      name: "Xà phòng Lifebuoy",
      price: 20000,
      stock: 60,
      category: "Vệ sinh",
      image: "https://cdn.tgdd.vn/Products/Images/2485/78046/bhx/xa-bong-cuc-lifebuoy-bao-ve-vuot-troi-90g-202211191641022011.jpg",
      description: "Xà phòng Lifebuoy bảo vệ vượt trội, 105g. Kháng khuẩn 24/7.",
    },
    {
      id: 5,
      name: "Nước ngọt Pepsi",
      price: 10000,
      stock: 120,
      category: "Đồ uống",
      image: "https://giathanhloc.com/wp-content/uploads/2023/12/lon-pepsi-cola-320ml.jpg",
      description: "Nước ngọt có gas Pepsi, lon 330ml. Vị ngọt sảng khoái.",
    },
    {
      id: 6,
      name: "Kẹo dừa Bến Tre",
      price: 8000,
      stock: 90,
      category: "Bánh kẹo",
      image: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/An-%C4%91%E1%BA%B7c%20s%E1%BA%A3n%20v%C3%B9ng%20mi%E1%BB%81n/an-21-keo%20dau/5-loai-keo-du-ben-tra-lam-qua-tot-nhat-va-dia-chi-mua-chinh-hieu-2.jpg",
      description: "Kẹo dừa đặc sản Bến Tre, gói 200g. Vị ngọt đậm đà thơm dừa.",
    },
    {
      id: 7,
      name: "Nước mắm Chin-su",
      price: 22000,
      stock: 70,
      category: "Gia dụng",
      image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rdx6-mchnk401tohscb",
      description: "Nước mắm Chin-su đặc biệt, chai 500ml. Đậm đà hương vị Việt.",
    },
    {
      id: 8,
      name: "Sữa Vinamilk",
      price: 7500,
      stock: 100,
      category: "Đồ uống",
      image: "https://cdn.petrotimes.vn/stores/news_dataimages/buihienanh/112019/30/18/vinamilk-thong-tin-ve-nguon-nguyen-lieu-san-xuat-cac-san-pham-sua.jpg",
      description: "Sữa tươi tiệt trùng Vinamilk có đường, hộp 180ml. Dinh dưỡng đầy đủ.",
    },
];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET single product
app.get('/api/products/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// POST new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: Date.now(), // Generate unique ID
    ...req.body
  };
  products.unshift(newProduct); // Add to the top
  res.status(201).json(newProduct);
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
  let id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body, id };
    res.json(products[index]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  let id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.status(200).json({ message: "Deleted successfully" });
});

// Authentication 
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Simple mock validation
  if (username === 'admin' && password === 'admin1234') {
      res.json({ success: true, token: 'fake-jwt-token' });
  } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
