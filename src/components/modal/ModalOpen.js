import React from 'react'
import Modal from 'react-modal'
import { useForm } from '../../customHook/useForm';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },

  };
  Modal.setAppElement('#root');
export const ModalOpen = ({showModal,setShowModal}) => {
  const url = ('http://localhost:8080/api/recipes')
  const [formValues,handleInputChange]= useForm({
    recipe_name:'',
    preparation:'',
    ingredients:[],
    cooked_before:false
  });
  const {recipe_name,preparation,ingredients,cooked_before} = formValues;
  const handleAddNewRecipe = (e) => {
      e.preventDefault();
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipe_name,
          preparation,
          ingredients,
          cooked_before
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err))
        closeModal();
  }
 
  
  
  
  
  
  // Funcion para cerrar el modal.
    const closeModal = () => {
      setShowModal(prev =>!prev)
    }
    
    return (
      
        <Modal
        isOpen={showModal}
        style={customStyles}
        onRequestClose={closeModal}
        closeTimeoutMS={518465415641616541654654654564}
        className='modal'
        overlayClassName='modal-fondo'
        >
            <form className="container">

              <div className="form-group">
                  <label className='label__Modal'>Recipe Name</label>
                  <input className="form-control mb-3 " placeholder="Recipe Name"
                    name='recipe_name'
                    onChange={handleInputChange}
                    value={recipe_name}
                  />
              </div>
                <hr/>
              <div className="form-group">
                  <label className='label__Modal'>Ingredients</label>
                  <input className="form-control mb-3" placeholder="Ingredients" 
                    name='ingredients'
                    onChange={handleInputChange}
                    value={ingredients}
                  />
              </div>
              
              <hr/>
              <div className="form-group">
                <label className='label__Modal'>Preparation</label>
                  <textarea 
                      type="text" 
                      className="form-control mb-3"
                      placeholder="Preparation"
                      rows="5"
                      name="preparation"
                      onChange={handleInputChange}
                      value={preparation}
                  ></textarea>
                  
              </div>
              <hr/>
            <div className='btn__modal'>
              <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={handleAddNewRecipe}
              >
                  
                  <span> Guardar</span>
              </button>
            </div>

          </form>
        </Modal>
       
    )
}
