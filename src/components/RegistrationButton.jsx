function RegistrationButton({isRegistered, onClick}) {
  return (
    <button
     onClick={onClick}
      className={`w-full py-3 rounded-lg font-bold transition ${isRegistered ? "bg-red-500/80 text-white" : "bg-green-500/80 text-white hover:bg-green-600/80 border border-green-400/50"
      }`}
    >
       {isRegistered ? "Unregister" : "Register Now"}   </button>
  )
}

export default RegistrationButton