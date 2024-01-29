class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.products.some(product => product.code === code)) {
        console.error('Error: Código de producto duplicado');
        return;
      }
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Error: Todos los campos deben ser completados');
        return;
      }
      const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      console.log('Producto agregado:', newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        return product;
      } else {
        console.error('Error: Producto no encontrado');
        return null;
      }
    }
  }
 
  const productManager = new ProductManager();
  
  productManager.addProduct('Botines Nike', 'Botines Mercurial edicion Mundial', 59.99, 'imagen1.jpg', 'P001', 10);
  productManager.addProduct('Botines Adidas', 'Botines Predator edicion Champions', 49.99, 'imagen2.jpg', 'P002', 15);
  
  console.log('Todos los productos:', productManager.getProducts());
  
  const productIdToSearch = 1;
  const foundProduct = productManager.getProductById(productIdToSearch);
  
  if (foundProduct) {
    console.log(`Producto con ID ${productIdToSearch}:`, foundProduct);
  }
  