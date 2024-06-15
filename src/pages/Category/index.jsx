import { useLocation } from 'react-router-dom';
function Categories() {
  const location = useLocation();
  const nameList = location.pathname.replace('/category/', '');
  return <div>Categories {nameList}</div>;
}

export default Categories;
