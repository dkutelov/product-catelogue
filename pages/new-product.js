import AddNewProduct from '../components/add-new-product/add-new-product.component';

function AdminPage() {
  return (
    <div className='container'>
      <h1 className='main-heading'>Нов Продукт</h1>
      <AddNewProduct />
    </div>
  );
}

export default AdminPage;
