function SearchBar( ) {
  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Search tournaments..."
   
      
        className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md"
      />
      
        <p className="mt-2 text-sm text-white/80">
          Results for:  
        </p>
 
    </div>
  )
}

export default SearchBar