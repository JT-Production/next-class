
import Link from "next/link";
import ProductCard from "./components/ProductCard'/ProductCard";
import UserDetails from "./components/UserDetails/UserDetails";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Users</h1>
      <Link href={"/users"}>View users</Link>
      <ProductCard />
      <UserDetails/>
    </main>
  );
}
