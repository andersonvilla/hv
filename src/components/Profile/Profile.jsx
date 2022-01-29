import React from "react";

const Profile = () => {
  return (
    <div className="justify-center">
        <h1 className="font-bold text-[#57C8B4] text-center">
          Descripción del Perfil
        </h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="font-semibold text-[#57C8B4] text-center">
              Resumen Profesional
            </h3>
            <p className="text-justify">
              Soy estudiante de ingeniería de sistemas, con conocimientos técnicos
              y experiencia en el área deback end. Tengo experiencia en
              microservicios y base de datos relacionales, y no relacionales.
              Apasionado por el auto-estudio y el aprendizaje continuo, me motiva
              mucho trabajar en equipo y buscar nuevas soluciones.
            </p>
          </div>
          <hr className="border-1 border-[#57C8B4] w-full md:hidden" />
          <div>
            <h3 className="font-semibold text-[#57C8B4] text-center">Skills</h3>
            <div>
              <ul className="list-disc list-inside m-3 md:ml-10 grid grid-cols-2">
                <li>Java</li>
                <li>SprintBoot</li>
                <li>Investigación</li>
                <li>SQL/NoSQL</li>
                <li>Git</li>
                <li>Metodologías Ágiles</li>
              </ul>
            </div>
            <hr className="border-1 border-[#57C8B4] w-full md:hidden" />
            <h3 className="font-semibold text-[#57C8B4] text-center">Idiomas</h3>
            <div>
              <ul className="list-disc list-inside m-3 md:ml-10 grid grid-cols-2">
                <li>Español nativo</li>
                <li>Inglés avanzado</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Profile;
