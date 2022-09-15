import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "test01",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
    {
      name: "test02",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
  products: [
    {
      // _id: 1,
      name: "퓨어 올리브",
      slug: "퓨어 올리브",
      tag: "당일배송",
      image:
        "https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/16474079356l0.jpg",
      price: "4,980원",
      desc: "두루 활용하기 좋은 올리브오일",
      // seller: "컬리",
      // package: "냉장(종이포장)",
      // unit: "1개/1박스",
      // Volume: "45g/450g",
      // allergy: "-대두, 우유, 호두 함유",
      countInStock: 10,
    },
    {
      // _id: 2,
      name: "유기농 찹쌀 1.8kg",
      slug: "유기농 찹쌀 1.8kg",
      tag: "당일배송",
      image: "https://img-cf.kurly.com/shop/data/goods/1639032884720l0.jpg",
      // imageHover: "/images/item01.jpg",
      price: "11,500원",
      desc: "안심하고 더하는 칠기",
      countInStock: 0,
    },
    {
      // _id: 3,
      name: "휴대용 칫솔 세트 2종",
      slug: "휴대용 칫솔 세트 2종",
      tag: "당일배송",
      image: "https://img-cf.kurly.com/shop/data/goods/1610007186682l0.jpg",
      price: `8,900원`,
      desc: "안쪽으로 기울어진 미세모 칫솔 세트",
      countInStock: 15,
    },
    {
      // _id: 4,
      name: "알꼬막 짬뽕",
      slug: "알꼬막 짬뽕",
      tag: "당일배송",
      image: "https://img-cf.kurly.com/shop/data/goods/1649919701563l0.jpg",
      price: "16,000원",
      desc: "아낌없이 올린 오동통한 알꼬막",
      countInStock: 5,
    },
  ],
};
export default data;
