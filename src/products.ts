// Dummy product data with locations
export const dummyProducts = [
  {
    id: 1,
    name: 'Samsung 4K Smart TV',
    category: 'Electronics',
    price: 49999.99,
    image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400&q=80',
    location: {
      building: 'North Wing',
      floor: '2nd Floor',
      shop: 'Store 205',
      section: 'Electronics Zone'
    }
  },
  {
    id: 2,
    name: 'Nike Air Max 2025',
    category: 'Fashion',
    price: 8999.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    location: {
      building: 'South Wing',
      floor: 'Ground Floor',
      shop: 'Store 101',
      section: 'Sports & Fashion'
    }
  },
  {
    id: 4,
    name: 'Dell XPS 13 Laptop',
    category: 'Electronics',
    price: 79999.99,
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&q=80',
    location: {
      building: 'North Wing',
      floor: '2nd Floor',
      shop: 'Store 205',
      section: 'Electronics Zone'
    }
  },
  {
    id: 5,
    name: 'Adidas Running Shoes',
    category: 'Fashion',
    price: 5499.99,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80',
    location: {
      building: 'South Wing',
      floor: 'Ground Floor',
      shop: 'Store 101',
      section: 'Sports & Fashion'
    }
  },
  {
    id: 6,
    name: 'Organic Apples',
    category: 'Grocery',
    price: 249.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8JRCcBh4eUK6roKj1xmoYtpTgI7nwla60Q&s',
    location: {
      building: 'West Zone',
      floor: 'Ground Floor',
      shop: 'Store 103',
      section: 'Fresh Produce'
    }
  },
  {
    id: 7,
    name: 'Sony Wireless Headphones',
    category: 'Electronics',
    price: 12999.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    location: {
      building: 'North Wing',
      floor: '2nd Floor',
      shop: 'Store 206',
      section: 'Audio Equipment'
    }
  },
  {
    id: 8,
    name: 'Levi\'s Denim Jeans',
    category: 'Fashion',
    price: 3999.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
    location: {
      building: 'East Wing',
      floor: '1st Floor',
      shop: 'Store 153',
      section: 'Apparel'
    }
  },
  {
    id: 9,
    name: 'Organic Spinach',
    category: 'Grocery',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80',
    location: {
      building: 'West Zone',
      floor: 'Ground Floor',
      shop: 'Store 103',
      section: 'Fresh Produce'
    }
  },
  {
    id: 10,
    name: 'Apple iPad Pro',
    category: 'Electronics',
    price: 59999.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
    location: {
      building: 'North Wing',
      floor: '2nd Floor',
      shop: 'Store 205',
      section: 'Electronics Zone'
    }
  },
  {
    id: 11,
    name: 'Puma Sports T-Shirt',
    category: 'Fashion',
    price: 1999.99,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80',
    location: {
      building: 'South Wing',
      floor: 'Ground Floor',
      shop: 'Store 101',
      section: 'Sports & Fashion'
    }
  },
  {
    id: 12,
    name: 'Whole Wheat Bread',
    category: 'Grocery',
    price: 79.99,
    image: 'data:image/jpeg;base64,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',
    location: {
      building: 'West Zone',
      floor: 'Ground Floor',
      shop: 'Store 104',
      section: 'Bakery'
    }
  },
  {
    id: 13,
    name: 'Samsung Galaxy Phone',
    category: 'Electronics',
    price: 39999.99,
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&q=80',
    location: {
      building: 'North Wing',
      floor: '2nd Floor',
      shop: 'Store 205',
      section: 'Electronics Zone'
    }
  },
  {
    id: 14,
    name: 'H&M Cotton Dress',
    category: 'Fashion',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80',
    location: {
      building: 'East Wing',
      floor: '1st Floor',
      shop: 'Store 155',
      section: 'Women\'s Fashion'
    }
  },
  {
    id: 15,
    name: 'Organic Avocados',
    category: 'Grocery',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?w=400&q=80',
    location: {
      building: 'West Zone',
      floor: 'Ground Floor',
      shop: 'Store 103',
      section: 'Fresh Produce'
    }
  },
  {
    id: 1,
    name: 'Samsung 4K Smart TV',
    category: 'Electronics',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400&q=80',
    location: {
      building: 'North Wing',
      floor: '2nd Floor',
      shop: 'Store 205',
      section: 'Electronics Zone'
    }
  },
  {
    id: 2,
    name: 'Nike Air Max 2025',
    category: 'Fashion',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    location: {
      building: 'South Wing',
      floor: 'Ground Floor',
      shop: 'Store 101',
      section: 'Sports & Fashion'
    }
  },
  {
    id: 26,
    name: 'Nike Air Max 2024',
    category: 'Fashion',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    location: {
      building: 'South Wing',
      floor: 'Ground Floor',
      shop: 'Store 101',
      section: 'Sports & Fashion'
    }
  },

  {
    id: 4,
    name: 'Coffee Maker Deluxe',
    category: 'Home & Garden',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1517914309068-900c5bca33b6?w=400&q=80',
    location: {
      building: 'North Wing',
      floor: '1st Floor',
      shop: 'Store 156',
      section: 'Home Appliances'
    }
  },
  {
    id: 5,
    name: 'Luxury Face Cream',
    category: 'Beauty',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80',
    location: {
      building: 'East Wing',
      floor: '3rd Floor',
      shop: 'Store 342',
      section: 'Beauty & Cosmetics'
    }
  },
  {
    id: 6,
    name: "iPhone 14 Pro",
    category: "Sports",
    price: 998.19,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80",
    location: {
      building: "North Wing",
      floor: "2nd Floor",
      shop: "Store 337",
      section: "Fresh Produce"
    }
  },
  {
    id: 7,
    name: "Adidas UltraBoost",
    category: "Fashion",
    price: 990.76,
    image: "https://images.unsplash.com/photo-1585386959984-a41552262c34?w=400&q=80",
    location: {
      building: "East Wing",
      floor: "3rd Floor",
      shop: "Store 150",
      section: "Sports & Fashion"
    }
  },
  {
    id: 8,
    name: "LED Desk Lamp",
    category: "Fashion",
    price: 597.21,
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=400&q=80",
    location: {
      building: "South Wing",
      floor: "1st Floor",
      shop: "Store 255",
      section: "Electronics Zone"
    }
  },
  {
    id: 9,
    name: "Yoga Mat Pro",
    category: "Sports",
    price: 436.04,
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=400&q=80",
    location: {
      building: "North Wing",
      floor: "Ground Floor",
      shop: "Store 318",
      section: "Fresh Produce"
    }
  },
  {
    id: 10,
    name: "Gaming Laptop",
    category: "Sports",
    price: 485.27,
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=400&q=80",
    location: {
      building: "North Wing",
      floor: "Ground Floor",
      shop: "Store 210",
      section: "Home Appliances"
    }
  },

  {
    "id": 2,
    "name": "Olive Oil",
    "category": "Groceries",
    "price": 120.50,
    "image": "https://images.unsplash.com/photo-1582515073490-daf6ee198f94?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "1st Floor",
      "shop": "Store 115",
      "section": "Grocery Hub"
    }
  },
  {
    "id": 3,
    "name": "Instant Noodles",
    "category": "Groceries",
    "price": 35.00,
    "image": "https://img.freepik.com/free-psd/delicious-noodles-black-bowl-chopsticks-ready_84443-46506.jpg?semt=ais_hybrid&w=740",
    "location": {
      "building": "West Wing",
      "floor": "2nd Floor",
      "shop": "Store 212",
      "section": "Grocery Express"
    }
  },
  {
    "id": 4,
    "name": "Peanut Butter",
    "category": "Groceries",
    "price": 85.90,
    "image": "https://images.unsplash.com/photo-1582515073490-daf6ee198f94?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "1st Floor",
      "shop": "Store 133",
      "section": "Food & Beverages"
    }
  },

  {
    "id": 2,
    "name": "Olive Oil",
    "category": "Groceries",
    "price": 120.50,
    "image": "https://images.unsplash.com/photo-1582515073490-daf6ee198f94?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "1st Floor",
      "shop": "Store 115",
      "section": "Grocery Hub"
    }
  },
  {
    "id": 4,
    "name": "Peanut Butter",
    "category": "Groceries",
    "price": 85.90,
    "image": "https://images.unsplash.com/photo-1582515073490-daf6ee198f94?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "1st Floor",
      "shop": "Store 133",
      "section": "Food & Beverages"
    }
  },
  {
    "id": 5,
    "name": "Garden Shovel",
    "category": "Home & Garden",
    "price": 210.00,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "1st Floor",
      "shop": "Store 145",
      "section": "Living Essentials"
    }
  },
  {
    "id": 6,
    "name": "Watering Can",
    "category": "Home & Garden",
    "price": 75.45,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "2nd Floor",
      "shop": "Store 221",
      "section": "Garden Zone"
    }
  },
  {
    "id": 7,
    "name": "Terracotta Pot",
    "category": "Home & Garden",
    "price": 60.00,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    "location": {
      "building": "North Wing",
      "floor": "1st Floor",
      "shop": "Store 119",
      "section": "Planter Lane"
    }
  },
  {
    "id": 8,
    "name": "LED Garden Lights",
    "category": "Home & Garden",
    "price": 320.99,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    "location": {
      "building": "West Wing",
      "floor": "Ground Floor",
      "shop": "Store 105",
      "section": "Outdoor Decor"
    }
  },
  {
    "id": 9,
    "name": "Samsung 4K Smart TV",
    "category": "Electronics",
    "price": 999.99,
    "image": "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400&q=80",
    "location": {
      "building": "North Wing",
      "floor": "2nd Floor",
      "shop": "Store 205",
      "section": "Electronics Zone"
    }
  },
  {
    "id": 10,
    "name": "Apple iPhone 15",
    "category": "Electronics",
    "price": 1249.00,
    "image": "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "2nd Floor",
      "shop": "Store 220",
      "section": "Tech World"
    }
  },
  {
    "id": 11,
    "name": "Bluetooth Speaker",
    "category": "Electronics",
    "price": 189.90,
    "image": "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "1st Floor",
      "shop": "Store 151",
      "section": "Gadget Area"
    }
  },
  {
    "id": 12,
    "name": "USB-C Charger",
    "category": "Electronics",
    "price": 49.99,
    "image": "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400&q=80",
    "location": {
      "building": "West Wing",
      "floor": "Ground Floor",
      "shop": "Store 102",
      "section": "Accessories Hub"
    }
  },
  {
    "id": 13,
    "name": "Nike Air Max 2025",
    "category": "Fashion",
    "price": 159.99,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "Ground Floor",
      "shop": "Store 101",
      "section": "Sports & Fashion"
    }
  },
  {
    "id": 14,
    "name": "Leather Jacket",
    "category": "Fashion",
    "price": 279.99,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    "location": {
      "building": "North Wing",
      "floor": "1st Floor",
      "shop": "Store 131",
      "section": "Menswear"
    }
  },
  {
    "id": 15,
    "name": "Ray-Ban Sunglasses",
    "category": "Fashion",
    "price": 119.49,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "2nd Floor",
      "shop": "Store 210",
      "section": "Accessories"
    }
  },
  {
    "id": 16,
    "name": "Designer Dress",
    "category": "Fashion",
    "price": 399.00,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    "location": {
      "building": "West Wing",
      "floor": "1st Floor",
      "shop": "Store 147",
      "section": "Women’s Collection"
    }
  },
  {
    "id": 17,
    "name": "Luxury Lipstick Set",
    "category": "Beauty",
    "price": 59.00,
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRCoP-FgCGh8E-N5J3wpVeeyTcizHPWWakWeeL1Zfp1SFaW_Zr9s4H4uq-c6pGkL5BxF_1BIr6BPkcENBofiCW3vWyytDqy8VUiGyureLrUGVqZ7r0A7kxPNBTxx-CEo1YExJixeXes&usqp=CAc",
    "location": {
      "building": "East Wing",
      "floor": "1st Floor",
      "shop": "Store 118",
      "section": "Beauty Bay"
    }
  },
  {
    "id": 18,
    "name": "Hair Serum",
    "category": "Beauty",
    "price": 34.99,
    "image": "https://www.thriveco.in/cdn/shop/files/Hair-growth-serum-with-regendil.jpg?v=1736323021&width=500",
    "location": {
      "building": "South Wing",
      "floor": "2nd Floor",
      "shop": "Store 202",
      "section": "Cosmetics World"
    }
  },
  {
    "id": 19,
    "name": "Face Wash",
    "category": "Beauty",
    "price": 25.75,
    "image": "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/products/OatCleanser1200-1.png?crop=center&height=1260&v=1651078209&width=840",
    "location": {
      "building": "North Wing",
      "floor": "1st Floor",
      "shop": "Store 140",
      "section": "Personal Care"
    }
  },
  {
    "id": 20,
    "name": "Nail Polish",
    "category": "Beauty",
    "price": 15.99,
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFRUXFRcVFRcVFRUVFxUVFxUWFhUVFxYYHSggGBolGxcXITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHSUtLS0vLS0tLS0tLS0tLS0tLS0tLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADwQAAECBAMFBgUDAwQCAwAAAAEAAgMEESEFEjFBUWFx8AYigZGhsRMywdHhFEJSI4LxFWJyojOSc6PS/8QAGQEAAgMBAAAAAAAAAAAAAAAAAgMAAQQF/8QAJxEAAgICAgEDBAMBAAAAAAAAAAECEQMhEjFBBBNRIjJhcRSBkUL/2gAMAwEAAhEDEQA/ANa+TZuXQ5Fu5KMexYwijcJxMPZmWc6QwiSrSKIF+BMOxLj2kaIuROpifDWZuCICxXF7NwzsSDGuzVASxaHD8cbEJCYVBNCom0U0mj5bhsk7PQjRPIlrLSzmDNBzNCXvkBWpTE7Y7DHQFJGi0ElHpoEkjx2Q0dIT4IqiY2N9DCexEAXWfmoefvNTGPkia6pZNz7YDwwQy8XBdnAoRSpAym196DixU8vtvZXFmyxtAFDD54k3Uf8AUpd3zOLN+ZpI821PomGFQIUS8J7In/xua+nMC48VEMhkg9qQaZbMKhNcMg0F1GShgWV0WERor7HOVqgh8MVXsaGHNolUeay6lDwsbGitRFuF6CDgwrUKo4O4mxUXYq4iy9lcRdVGWseSPQZKYORqnUGXyiiAl8S3ptAiB10LBnyX3EmS9lVFgpg00Cqi3VctCFkdixjFYG0RL4YCCjxFmbCTc2SorIbLqmDERbSqsKT46Lbrl2cLkQmzFdo5APFVbgkkBDoi8UbVVSQIFkQXgyuI4YBMAg7Vp5yVrBpwWYxiI8RgeK0Lo7jA8FbBSM/2dk6RTfatRHJBFFjcEmXiORxWye7Sqp9kS0GysXNYoTGJejSQrIbtyYfBzMOZEi74Oz5ZOlxcj5KMQKKWPgQ4hojsHweLEb8R4EJmoc+1R/tbqfZNqzRGaQTKNAGc/tGby09aLNYlFqT1fb6p7is5DgwrxO6+I2G0kUzbaAXsT7VWXmX191Uvgw+qnyyCnGo+WE7ee6PH8VWZY4toQaHWosR4pr2ii1LWf3H2H1SiKVSMpr8B7bTcMtBiGK0aiL36jg495vgVtZjt9AAAe17SQD3QHAVGlyvlOHivsFOei1crDjklF6Z9HdjMKOP6UQE/xNneR18FXIVrcL57KGhruuvs+FyAZBh57vyNzE6k0FfVSMt0dP0+aWWW/AvZXcrGw3V0R8SIxuxCzGNsFqI7NksvHsPloJIunuFMO9ZSFjVRZFyeLkHVVJiZXNaNrEFFWXpdCxdrm3KkyNXRIloyKN6YVFcl0wUfCFVRGhCqXLYUGosHhIsKiiuBQlzlbOoV6vcy5QGxDjkXKELg06HBMMWlS8EJJISnw3EFOAjtAePxmiIOacQZhpg+CTY3LAuBTXDpAuh0G5R9EXezNYfMtEwea20KXzgUCWYb2RDYmd29agxGsFApQPPwiiBKBgq5UzE25xyQxU+w3k7AqY0Z0QkVoBdxOjRvKEizVsrKth7T+6JxO4cEyEL/AEHGDfZWJaFDfmyiNF3n/wAbDwrt4nwASLHcdLn5M2bedl9QOHuj4kbO4QmWH7yNjdoHEpFPYR8KNmcaw/mzf7do5hNlJLSHy+lGa7WzhiTcCBW0LJX/AJvIiP8AJuUeBRUdyQYY50abiRna1fEPAuJAHqfJNZ+PlY524Hz2JL7OXJ27M1PRc8Vx2A0HIWQouVJui8gNqeZ/yiAGcoKCvCvmhC6pqio7qM52Q0MKMiG+Ay2eNCadC8V/4jvO9AvszSHtsvmXY6U/qF5/bD9Xm3/Vp81sYE6WmxVwXk63pI1DkFzcKlVl56XOaq1vxGvGt1RGw+oR0PzJZI0zJtinQIluelRVNhhjWm6vaxgCGSFYsDS2wfCYjzYrUSUbKLpXhYYXK3FnZdNEtipRUZbNHLzjToVI3WLkJpxNk3hzjxsQNBvDe0x4WK2HDSpmIFEwZsnYltbFuEug74a5DfFevFdIDhIviQu9olWKYa4uq1aWylkBTTOpU7MjD7PlxBenUCEyGKBEzjqBZuNPd+ipuhsYubsYTs4gc5cQBqeqrnsc8gNFSpzA+C03BcbGmzh1wUinKQ1RS0gGfi6sFmNN98R20nhuCSYhPmuVvzHThxUsRnDzJ0G0lWYPhhb/AFIvzG4B/b+fZOyZVjRrhClsNwmRyNqdTc11J3lZDt7jJDfgN/dc8hs9fRbaZmcrSvjWOzZjTLyL3yjrmskW5OxOd1FthmAQcrHP2ud6Nt71Q3aGN3Q3+R9B+aJw1ga0NGwUWZxeLmi02NFPE3P0T0cpgEbQBWyDb13fVUxtUdIstzKIo6cdcDcPVTkYJe9rRqSAPEod7qkninPZyDWIDtqGt5utXyr5hC2FFW6PqnZXs239OCTTO4vsL5bNYPBjW+qcO7JQj+59ebfsmWHODWtaP2gDyFEwY8JXN/JvTlFUjHR+zcSH3obs43aH8qozFqGxW3IWV7WyNvit1HzcRvTIZd0w45H5FEeETcJbmNaFMsKmCbFTnZVpdbVPkrHSztdA8pDyEFaxko2Iy42JAJUgVTrDp8BoCCmxPqZKlQvMmITq0sjoM2w2UsQiAhJocO6uOPl2Z+bZoGwmnRGwAxuxLJV1AvXToCF4y+Q5+O3cuST9euVe0DY1mC7OKJrDZZL5mJlujoMQlqpCpAWJGyQSmDlzy95yt3bT9gnWIx+9RBujLPkyU6NeKDouiOa0UYKdb0rnoTXmrq15m69jTCDjx0lZJXaZphjKhJQmEkNq7+RufCuihEjqT4gKEmXABW7btj0khF2nxItYQNTZYGTl8kUGJUAEmtDc7DbitLisUxIwaNl9KrTyHZxsRmYgCugAoLbVpwwtWZ/UY+ZjosdpBIcCKbCsmH5nFx2klfSMb7JBgzBrvAV9llI+B/x+3unVRgl6aXaM42568Ex+Vp5UUomEPhkVa4bbileSjMtNKDfdQQ4SXaBmBaPsxaKzgc3iNPokEIUudi1nYiTMSIXHRoqTsvdLn0Mwr6tn1DDJk0unsCICsnIxs7qN+XSu9a6bkmQ2ksq2nEkHzVRwZKujbPTSfktzoLFqGG4H+JUYcxVdE7/dSHuSRONdmUgwKaBWPhOF1ov0QaaUqUScHDhc04BbeSXZHlSWkZZ00aUV0CKAE4j9mW/tefGhSWew58LUVG8afhNhKD6YiTbPY0eqrY4BAh5BRrYOYJrpA1QU2Mdi5lyg4uZiY4NDz3KGVJWAmW/AC5OP0K5ZeZdhc23aiZWMC2yFmXd1LJKaIJCGwVG0e4i/vFLokZFTr6klLY5OwV4LBkdyZ0sS0iuLEVER6i6O0mnptHgqohCpI1LRW+MlGK4hQFXzsfLtSHFXvGQ5a565d1qVPO4RrukScoxjyZDC4BLy46lfRZc5AGjYKLK4BKd8cLnw/K2cXDzV9DQCpFQ5xy5g0E5QTrw/afHoY1xVCMs0qTApufoQFVGEKJ8zAeNLjxQcaXiZi6lW7C0g2qQDQXANDSoFU6wbE4bGOa1wDnNh/P8AKH/1BEe6tqABpptqAnWVOXGNpWCyeGsbXIQQdWPAew82lLcZwCE4d2Xhg72lzf8Aror/AI9CcptU0tS1bGmy2xSbiNLm9Eyk0R4ot2ZaawoQW/8AizAm7Hhr2H/2+U8QrsNaACyG3IHOzPA9G+noFDtLjfxP6bBcmhTTBpPKKlJcE52io41ZocBgd9gptB8Bc+yc45N0GTabnl/mnkqOzkH5nnQDL9T9PNKMTnM7yRtOVvLQffxWgGueX9BkF9G5ibJlg4NC83LtBubxSqXZ8R4hj5GABx3u3LUSwAFqLktrm2gcjtFkGWHzG5VpCrMRSDld2IaOJVEeCHAgioKteVUXqroiRkMRwosiUHynT7I+SkyKI3F3gNBO/wC6Eg4g0bVrhlco7Amn4CY+Hh2qIlJYQ9EA/GGjaqYmOhR8nouOKT6Q/wD1C5Zv/XQuQ+2wv48/g1haMqyM3jUJkYsGZ1HUcWgUB0IFTchasAlq+aTEg+FHDXg0MQUdscC6xrvWfLJpKheM1M0+6FDlbMuuqGuWR9nRgtEo8lDijvi+xwNCPFKJzA3j5IzqcQ0+tE6bECom5gAJyprZdyT0YfEMOcD3nudzsPIIqZh5mQRStHOPIZR9QFHGZ9tfmCJgwXD4ZOjoWZouCA5xrUcmsI5qY0nNIPIrikxrgEGjS7eaDkmcWYLWuJo6tD3qm7QQ01BDhQHeoS8LKwDcPXVC4i491o1JXRQppSey+WjxC1rsjsjHwyS1oP8AShgZmV1cBla6laXJK8knQYkNvxMoyvDy1vdPwwIgMJp1oAwOJ17+tSroAZnEJgcYkIRAxzjRjnVcXZmBpIF3UvewKVOlHMoHNtsOx3I6GyNIGMVK10GTEk1rTfK4C4JFBTKwuNb5Pi52Zh8uUV1qleKQ2wg9sSIA4Nq2lQcwJBBa8Bw0B0uHAhXxJ17AA15ABrlrVta1oWmxB2hZTtBPGIQKABrQxobUANFaAVJO06lRtouprtguDwviR21/kF9AFKgNGlgFlOzEDKPiU/caeAI9ytvgECsTO75WDMSdOH38EOJ3YV8Y2w6eiGDAbD/c6tfH5voFnJZxfFDW7BUn+OwHnqp4viPxIhIvWzG/7dnJTk+4KAVcbuOl1M+RpcY9lRi1GvLNBJAMblaKDq6OhxUhhxIg1APAG/qAExk4wcua4yi6kqBlGhxDiKfxEDnovDMbUTdCeNhj4qHdEQrpheOmhoFXZfGhX2hjE0aOf2SJsB7tCnczDzkkqiWs7RdPHjUYGf390UQsFiG6Ih4G/atXJPBaEVlCCUg4+pkjG/6E5ctcuS+chv8AJZbBNktxGRgxu7FJBa4Oaa0oRpw9E0haIDFMOhRW5XnKQ7MxwNCDsvt5FJy/YZIfcKJrAYhuyPDcDpm7p8x9kmyOqWtjQHEGhyue6h5hlEdM9mowNWRoR4lzoZ9AUkMBzjQRWP2dyK9w8wFzb/J0Mb/IRleSR8aD/wDafaGg8alobIZMSdGbYyHCca83kgBVHDXuNnwh/wAnRD7MKExnB4UNlXTbS8/shwnvoOMQlo9CUcXvsdLxV/4JZKdhw35qMcRo5zC9/wDa1xyNPGldy2UCHnitPe+UE5zV9RUuDzvzkjkAsfhM0IT/AOmxufZELczxxbmJbD5tbXitzhLCM7j/ACN/Gp9Vs9OrlYMvkPeUrnHgupusnEaVdQkXFCSd2Ud71qBv1S6LEa539ZpZWpBbU2rYXJr+4cMoFr03oCEl4Olp17nE1aMrS57/AIbS9wBFKm2Y5i3aKmhNVfik4IkKrA6hid7OalpDRTLsobnZfNa6CgwqEvhRGuo05g4Chb3muBFbttXYaEHVdNmJl70MMaK2aDlrYEkkkk2AuUSSsnGLkmhJPRDRZqZFXLQzzrFJ4TKvvoLlBkdDpLwOIDS1jWjYB56lMTiMXIYbSACammrtBQndZKXTI4IuRhl1zofM8OSw4ZZHJqL7ClHQTJwKm1ztdv4DgnMFgaqYbMgvru3IrDoHxXhug1ceA1+y6WOCitANpKxhhEtndmcO43/s7dyVGKTrRHqw7O9TTMPrT2XmO4y1o+FBoALEj2H1KSycIuOY6Jfqq9vYqCcnzl14Q9M3XahZjEw00Jp9tpQMaYdXJCGZ58m8XH6I3COyQLviR3GI83v8o5Bcumy3xj2DsnIkY0gtOX+ZsDyr7rQYZhTg2jjc6lN5WTawUARJTIxrZnnlvSFJwgbz6Kk4ZkvqPZOi5VPctCzSQj20xZL2RgmENHGU02HRewQmPImA0kEfEXL3IvFXJFWFsCX4sLJkEuxQF1ALpU/tCxfcZmJAGa1RyJHsvXyQP7nf+zvumQkh+53l9/8AKtZKsFr+f4WRYJPtHTjKhFEwlm/zP3SPFILBag65LdiSYdW7trvug53B2uFMv/qRXU/yN7JnsS8UWsivZ87lWCtGi528KrbSdmNG0C/3S5mClr6j/aSCC1wBqdNumv5U3zDgTY22o8bljewMkregubiUaSNUMJh5pEoCW1FdCS6tLDaC6ttpQszP1Iaaey74p2Ej779y2QywZaSaCmRGO+bummoFO+CS12eua4AaeJrrUrv0j3MtEqTQOrQt7xZWr62AAZX/AI7hYeLMF5q41IFP8oabiU8v8p1F8H4F2LNLCA4UsD4HTz15EJVFaMjgTTM6ng2/vRFTIdEdQVJoBvsAAPIABBYvAIoAflHrqVmzz1QT12W4JIPfEy1zMF6+wW0OWC3e86dbkvwJogy7XH5njNxNdB5UVEeYLiSderI8EOMS1cv0MTGtUmpPXkvTiTmMc1pu6lTwGxLWRLcUNGnWNdlJvtpc/wCVoclFWyOPyM5CXMR3+0fM7d+UZEimKfhwLMbYv+jd54oOGYkUNhsbkh/xHzO50WklsMiQWguhlrd9qDnTTxWD1DnLdaFSlu3/AEF4LhjIYFvHb4nan0MU5JXLxLBFsi0SY6M87YZVeOchfjb1B8wo5AqBe56qfEshHR1EPqUKYfEhNQ3Opl2H0XsKBEC0GGygy1O1GfpxuWqENGDLP69GYyxNy5ab9ONy9R8QPcYpfXb5IOO5HPFUM+GEDOljil0CgUHHYvGiutBs4qcUqDXdVVD6L2t3cF46g63Vdt5HoFeMfUjx3blcRp4fUbPDy8iQtgMzL1qCd99oNAARb0II9krm4JDqk5XfyAqHVIDQ9tbm9Nb6CugfltraUr/1B3W68R40EOsR/ioPh7b9yJxTWyJmYmII/jCDrkHK0tNKihaRv3VoVc6AwltB8Mn+9nKrakD+0I2Yw61PmBtQjeTW22w2UoNwSWZkIje9BiFpsaGj2Hda9BytwGqU8bXWyOKfTodPwcjWGSP5QjmHkKlAR5FlfmZ/cG18ahJYXaSPCdSLBaTTUVbXcWkVbTkE2h9p2O+ZkQ7szmv2biBt4oOa/QPt5I/kCmoTYbTlc07wKa+Cy80M1TvWkxfEmxNGUG+1fRZ+ZIrZLk9joJ1sNizrTo4WAaBXQAUQkaea0VNTyCXZDnFBc7tqf4fg5dQvPgtWPLOeooepa0Dy2eI2oq2os3b/AHbuSbYbggb3nXO8o+DAazQKbo61Rgu3tg2EwgG6WWpkGZYdH6m7hrY7D4JFKTMCDDER9HRDcDWm6mxKMQ7QxIho3ujcNvM7UxmbIpZXS6+R1LTQa5zK/K4gcq2V8SbWelGubd2puvZ7E2sFXGg62Liye2l0M9tWOjN7yp/FqsGO0ge61QBsNj5HYjmY69xsQ31P2QJ/ITx/BsPigK/DWmI8U0rrv5cFn8MhOiGriXc1v8CkcrcxHL7rRjjyZlzSUF+RnDh0AClRSXLWcsjRer1coQQKl6tKhRKOutAroZ1VZZ5aa/lFP1XrB10VKC5MpgQuuir6W65gr0vp1uK8Lr/fmfuiRTtnlqddbVU5lOuP561VpHn+Pwq4n3+n3/BRAlLm9ca/fragY8uNdD3b7CanXxOuul3JlEpe/wDL3FfL/NFRFZr4+4dp5qyzOz8gHCjmg2rzdU1IOteV99apHOYcYd23bv2jn9/ZbGJCAqCKtvyoHVHKgPK37UFPQKV8euvXVLnBSGRZjXXQbxcpzPS1CS3y+yWw2ive0rfltWVxadDBngmFCnxX2rpXd9K70fFnWizBQb9pSyZxDNttsbsAQjoy6UIqMaQyMfkaunbceKpMzxqln6nYLncNSjZXDI8XSG5vPU/UeSLmvBGkeGKXGgBc46AJrKQmwRniEZvRqNkOzMyBRrMldTShPi5HwOxzq1flJ3vcHemgS8iyTVLQiWSPTaMzMYo6IaQgTxoulsAixTV3r9luoGBFv7ofIA+9FfAIBLctCLFYp4ZRewfeX/Ji39gWPuXEHe2gKNkewsNmsR7uZH0C12cKTXIOKFvJIXyeGfC+W/ArRyWIA0aRl2Dd+Esc5UxHo4z49CZw59mqXIPDJnOwE6ixRi1J2rMElTpnLxerlZRnX2VRRLmKJYEujrKSKSF6AplqpqSoEiYb1zUNOuR6+m2MRzgN/psOhNK3G8a+fgfX8i4+U3BvtNlZKLOHXlyUXs65tpt647FwGzw1ra418jet9+qkXdeX1RFAzmE9bcoI8ajgRwXO2/3eor17HVEnrzCg9vXXXNWQDjN6/t6422oOO3XkeVwD5eY8bJg4dch1+ENGh7t9fSlfI6j2VMJGaxCXuTyPp9uqWSePArwOnA9dUWrmYPsOuvTVJ5qX28euvbVKkrNUdoy0wzvAFWshEkNGpsmUxKhx4jQ/Q8PvtS97S00IoVnlHi/wC1RqMLkocEVABdS7iAfKugTcY1EaLPIHCwWGhYjEbatR6q3/AFjf61XQx5sVUtE4xl2fTMMxCI4AviMy03jN6K6PiUJvzPaPH7L5m2aeQCASDpResgxn6MPiQEz3IfKEy9Gm7bo3Ux2kgjR1eQP1t6oeRxH4jnP0BoB4bVnJfCnaxHAcG/dGsdlFBYLN6jNFqkFHBFL6TSGbCnCmRdZ9kwpQZgrA5k9k0LoyGjx9UA2OSvHOqiTFuA+wCbIcNxoD9FqgsThop5ratWrC9HP9VGpWerly5OMxnoj1XmVzmKBB2JZ11RwKg8devFelxCiYm8Ky0iFb+PLQk8joerqMIjQDSxF7Wbamyx0p5bYxHjZrtBsdtNba11p6LqUApvFtKCoG2uzZ/lQKi0u689vhvC8Bte1q/wDXw+nguYTTw+n34qTj14k+w+yIE9y/VRdt8ffr8rmW68/X/JUuvv8ARWUDRoF612+4pTj1at0K5pGvD/8AJ1PLXzOiYObw16I69ENFh7t9Tx2dH6KBJi+K2vl+D6gcd+5Ax4P366+ybOZbrmOvZDRYfv8ARA0Og6EcaV2gJfMy4cKHwPXXJaUwUHMSw2BC1Yy7MdGguaaEeW3iFS6DVaePKh1j/jrreFUSWLTp+VkyQcf0ShfKRHsPdNtx0TOHjBbq3yKHdA2qX6eqWEpNBLcbB1DvT7qX+uMrQh1dlhT3QX6RexJDMKEKy+Qw/wBXA0ZbfWp8kZKYi2tajyKQMhuZZ+mx30KJhwCLt8lTsOotGmZNA6EImDFboDXldZ+WbvBCdSNNiJbEZIpGhweHme0bK18lrwlGAyBYMzvmIsNw+6brdjjSOJnnylo5cuXJggzZevHOUc53D1VRincEqztKJbn68F6XBUiLw+ql8Qb/ADtuVl8TokCunh7fZDul3VqCWnhoajlvCLbw9OuC9cKqycmgL9VQ0eDvqDfQGtNyvaGmtCDqCPPUHnuvxXRoQIoR+NBUeqDcMverUXNd3zONaVP8d30Vl0mHg0PW/wBfPy0XoNvL2t1bgFVCmAdtb7aag0101Ck+HtB2HXjT7eO2qsCiwEdeqg8Lg2/W/r8KYHXsrIBRm8OtR151VBb6dfXophFG3q3X4KHdD69PansqCTA3N6665qt0Lb111uRxh9elFBzOvr16KqDUhVHltvXXVtgMWVrY9ddbk/cxDRJdC42GpGcfLUNwo/pqGyfOl6i6qbL8Fknj4snIXw5SqvZJUTKHARbIIooogOYrGHhzaEJdEw50E1Heh+rfuFqRDUWsvdE4oFZGhTKwg4AtIWo7O4YHHO4Dumw3nelAwxoNWix2aU5cFtsNgBsNoApYE86Xqiww3szeqzVHQUAvVy5azmHLly5Qh//Z",
    "location": {
      "building": "West Wing",
      "floor": "Ground Floor",
      "shop": "Store 109",
      "section": "Nail Art Zone"
    }
  },

  {
    "id": 22,
    "name": "Eggs - Organic",
    "category": "Groceries",
    "price": 70.00,
    "image": "https://images.unsplash.com/photo-1615484477679-66e334d83ba2?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "1st Floor",
      "shop": "Store 117",
      "section": "Daily Essentials"
    }
  },
  {
    "id": 23,
    "name": "Rice 5kg Pack",
    "category": "Groceries",
    "price": 210.00,
    "image": "https://images.unsplash.com/photo-1571047399553-3e67494b9fbe?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "Ground Floor",
      "shop": "Store 104",
      "section": "Food Staples"
    }
  },
  {
    "id": 24,
    "name": "Electric Kettle",
    "category": "Home & Garden",
    "price": 999.00,
    "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80",
    "location": {
      "building": "West Wing",
      "floor": "2nd Floor",
      "shop": "Store 203",
      "section": "Appliance World"
    }
  },
  {
    "id": 25,
    "name": "Curtain Set - Floral",
    "category": "Home & Garden",
    "price": 650.00,
    "image": "https://images.unsplash.com/photo-1600369672827-03fe4b4ce11e?w=400&q=80",
    "location": {
      "building": "North Wing",
      "floor": "1st Floor",
      "shop": "Store 122",
      "section": "Home Decor"
    }
  },
  {
    "id": 26,
    "name": "Table Lamp - Wooden",
    "category": "Home & Garden",
    "price": 799.99,
    "image": "https://images.unsplash.com/photo-1592878904946-74a4c2a93c83?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "2nd Floor",
      "shop": "Store 214",
      "section": "Living Room"
    }
  },
  {
    "id": 27,
    "name": "Sony Headphones",
    "category": "Electronics",
    "price": 599.00,
    "image": "https://images.unsplash.com/photo-1580894894513-4bfa9320db5e?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "1st Floor",
      "shop": "Store 150",
      "section": "Tech & Audio"
    }
  },
  {
    "id": 28,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 199.99,
    "image": "https://images.unsplash.com/photo-1573496787935-4b21d5b1d1d3?w=400&q=80",
    "location": {
      "building": "West Wing",
      "floor": "Ground Floor",
      "shop": "Store 100",
      "section": "Computer Zone"
    }
  },
  {
    "id": 29,
    "name": "Digital Alarm Clock",
    "category": "Electronics",
    "price": 299.00,
    "image": "https://images.unsplash.com/photo-1616594039964-30d5d99507df?w=400&q=80",
    "location": {
      "building": "North Wing",
      "floor": "2nd Floor",
      "shop": "Store 218",
      "section": "Home Gadgets"
    }
  },
  {
    "id": 30,
    "name": "Men’s Running Shoes",
    "category": "Fashion",
    "price": 129.50,
    "image": "https://images.unsplash.com/photo-1600180758890-a6445e0649c6?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "1st Floor",
      "shop": "Store 134",
      "section": "Footwear"
    }
  },
  {
    "id": 31,
    "name": "Ladies Handbag",
    "category": "Fashion",
    "price": 349.99,
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "2nd Floor",
      "shop": "Store 209",
      "section": "Women’s Accessories"
    }
  },
  {
    "id": 32,
    "name": "Men's Formal Shirt",
    "category": "Fashion",
    "price": 299.00,
    "image": "https://images.unsplash.com/photo-1600180758714-8db5e242baa6?w=400&q=80",
    "location": {
      "building": "West Wing",
      "floor": "1st Floor",
      "shop": "Store 138",
      "section": "Menswear"
    }
  },
  {
    "id": 33,
    "name": "Makeup Brush Set",
    "category": "Beauty",
    "price": 89.99,
    "image": "https://images.unsplash.com/photo-1570819174499-66a1d0f04a1d?w=400&q=80",
    "location": {
      "building": "North Wing",
      "floor": "1st Floor",
      "shop": "Store 144",
      "section": "Cosmetics World"
    }
  },
  {
    "id": 34,
    "name": "Body Lotion - Aloe",
    "category": "Beauty",
    "price": 60.00,
    "image": "https://images.unsplash.com/photo-1574787097353-0a88a5d4f4c6?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "2nd Floor",
      "shop": "Store 200",
      "section": "Skincare Zone"
    }
  },
  {
    "id": 35,
    "name": "Face Mask Pack (5)",
    "category": "Beauty",
    "price": 120.00,
    "image": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "Ground Floor",
      "shop": "Store 111",
      "section": "Beauty Lane"
    }
  },
  {
    "id": 36,
    "name": "Facial Cleanser Gel",
    "category": "Beauty",
    "price": 55.00,
    "image": "data:image/jpeg;base64,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",
    "location": {
      "building": "West Wing",
      "floor": "1st Floor",
      "shop": "Store 112",
      "section": "Glow Store"
    }
  },
  {
    "id": 37,
    "name": "Duvet Cover Set",
    "category": "Home & Garden",
    "price": 950.00,
    "image": "https://images.unsplash.com/photo-1616627566519-8b9bb87276b0?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "2nd Floor",
      "shop": "Store 213",
      "section": "Bedding & Comfort"
    }
  },
  {
    "id": 38,
    "name": "Wall Clock - Minimal",
    "category": "Home & Garden",
    "price": 300.00,
    "image": "https://images.unsplash.com/photo-1629196971470-7f78fd7f79b6?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "Ground Floor",
      "shop": "Store 114",
      "section": "Home Decor"
    }
  },
  {
    "id": 39,
    "name": "Kitchen Knife Set",
    "category": "Home & Garden",
    "price": 499.00,
    "image": "https://images.unsplash.com/photo-1612336307424-205fd3f5b7b6?w=400&q=80",
    "location": {
      "building": "North Wing",
      "floor": "1st Floor",
      "shop": "Store 127",
      "section": "Kitchen Zone"
    }
  },
  {
    "id": 40,
    "name": "HDMI Cable 2m",
    "category": "Electronics",
    "price": 150.00,
    "image": "https://images.unsplash.com/photo-1606813902749-1d31b601d5e3?w=400&q=80",
    "location": {
      "building": "West Wing",
      "floor": "2nd Floor",
      "shop": "Store 201",
      "section": "Accessories Hub"
    }
  },
  {
    "id": 41,
    "name": "Bluetooth Smartwatch",
    "category": "Electronics",
    "price": 1350.00,
    "image": "https://images.unsplash.com/photo-1603575442053-dcd20fd08988?w=400&q=80",
    "location": {
      "building": "North Wing",
      "floor": "1st Floor",
      "shop": "Store 132",
      "section": "Tech World"
    }
  },
  {
    "id": 42,
    "name": "Scented Candles - Pack of 3",
    "category": "Home & Garden",
    "price": 249.00,
    "image": "https://images.unsplash.com/photo-1616436839675-1dd6e5e4c316?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "1st Floor",
      "shop": "Store 135",
      "section": "Lifestyle & Decor"
    }
  },
  {
    "id": 43,
    "name": "Flavored Green Tea",
    "category": "Groceries",
    "price": 80.00,
    "image": "https://images.unsplash.com/photo-1582213782179-bf4ce6c33f9c?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "Ground Floor",
      "shop": "Store 107",
      "section": "Healthy Foods"
    }
  },
  {
    "id": 44,
    "name": "Cashew Nuts - 500g",
    "category": "Groceries",
    "price": 220.00,
    "image": "https://images.unsplash.com/photo-1580931901374-d17b4f6ae6dc?w=400&q=80",
    "location": {
      "building": "North Wing",
      "floor": "1st Floor",
      "shop": "Store 126",
      "section": "Dry Fruits"
    }
  },
  {
    "id": 45,
    "name": "Tomato Ketchup",
    "category": "Groceries",
    "price": 65.00,
    "image": "https://images.unsplash.com/photo-1626611653560-f510b71f0b3b?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "Ground Floor",
      "shop": "Store 106",
      "section": "Condiments"
    }
  },
  {
    "id": 46,
    "name": "Facial Moisturizer",
    "category": "Beauty",
    "price": 89.00,
    "image": "https://images.unsplash.com/photo-1607083206963-5ee7fba38208?w=400&q=80",
    "location": {
      "building": "West Wing",
      "floor": "1st Floor",
      "shop": "Store 113",
      "section": "Glow Store"
    }
  },
  {
    "id": 47,
    "name": "Yoga Mat",
    "category": "Fashion",
    "price": 499.00,
    "image": "https://images.unsplash.com/photo-1599058917212-dfd3db158aa0?w=400&q=80",
    "location": {
      "building": "South Wing",
      "floor": "2nd Floor",
      "shop": "Store 216",
      "section": "Wellness Gear"
    }
  },
  {
    "id": 48,
    "name": "Men's Denim Jeans",
    "category": "Fashion",
    "price": 699.00,
    "image": "https://images.unsplash.com/photo-1618354691325-e2e80a4a0196?w=400&q=80",
    "location": {
      "building": "North Wing",
      "floor": "1st Floor",
      "shop": "Store 121",
      "section": "Menswear"
    }
  },
  {
    "id": 49,
    "name": "Cotton Bath Towel",
    "category": "Home & Garden",
    "price": 199.00,
    "image": "https://images.unsplash.com/photo-1623852300789-5a962103db14?w=400&q=80",
    "location": {
      "building": "East Wing",
      "floor": "1st Floor",
      "shop": "Store 136",
      "section": "Home Textiles"
    }
  },
  {
    "id": 50,
    "name": "Wireless Keyboard",
    "category": "Electronics",
    "price": 449.00,
    "image": "https://images.unsplash.com/photo-1581090700227-1c02f694d0e1?w=400&q=80",
    "location": {
      "building": "West Wing",
      "floor": "2nd Floor",
      "shop": "Store 204",
      "section": "Computer Zone"
    }
  }
];