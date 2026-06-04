




import linkedinLogo from "./linkedin.png";

function UserCard(props) {
  return (
    <div
      className="bg-white w-64 rounded-xl shadow-lg 
      overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all
      duration-300"
    >
      <img
        src={props.imagen || "https://via.placeholder.com/400x300?text=Sin+Imagen"}
        alt="Foto de Perfil"
        className="w-full h-48 object-cover"
      />

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">
          {props.nombre || "Sin nombre"}
        </h3>

        <p className="text-sm text-gray-500 my-3 flex items-center justify-center gap-2">
          {props.profesion || "Sin profesión"}
        </p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mx-auto">
          <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5" />
          Conectar
        </button>
      </div>
    </div>
  );
}

export default UserCard;















