import RegisterForm from "@/components/clientForms/register";
import Image from "next/image";

export default function page() {
  return (
    <div className="container ">
      <section className="  grid grid-cols-1 gap-5 my-5 py-5 lg:grid-cols-2">
        <div className="max-w-xl lg:max-w-3xl">
          <RegisterForm />
        </div>

        <div className="w-full ">
          <Image
            width={300}
            height={300}
            alt="image"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className=" max-h-[600px]   w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
