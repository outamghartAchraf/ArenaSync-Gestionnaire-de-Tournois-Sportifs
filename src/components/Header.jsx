const Header = () => {
  return (
    <div className="flex justify-between items-start mb-5">
      <h1 className="text-2xl font-bold text-white leading-tight">
        Good Morning,
        <br />
        Samuel Walker!
      </h1>
      <div className="flex gap-3">
        <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition">
          <i className="fas fa-bell"></i>
        </button>
        <img
          src="https://i.pravatar.cc/40?img=1"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border border-white/30"
        />
      </div>
    </div>
  );
};

export default Header;
