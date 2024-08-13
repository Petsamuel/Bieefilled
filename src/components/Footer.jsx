function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <section className="relative  mt-8 w-full pt-10 text-black">
      <div className="text-center w-screen mt-5"> &copy; Bieefilled {year}</div>
    </section>
  );
}

export default Footer;
