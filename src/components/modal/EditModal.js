import React from 'react'
import Modal from 'react-modal'




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

export const EditModal = ({data,setData,showModal,setShowModal}) => {
    
    let {uid,recipe_name,cooked_before,preparation,ingredients} = data;
    const url = (`http://localhost:8080/api/recipes/${uid}`)
    
    
    const closeModal = () => {
      setShowModal(false)
    }
    const handleInputChange=({target})=>{
      setData({
          ...data,
          [target.name] : target.value
      })
    }
    const handleEditRecipe = (e) => {
      e.preventDefault();
      fetch(url, {
        method: 'PUT',
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
    const handleDeleteRecipe = (e) => {
      e.preventDefault();
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipe_name,
          preparation,
          ingredients,
          cooked_before,
          uid
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err))
        closeModal();
    }

    return (
        <Modal
        isOpen={showModal}
        style={customStyles}
        onRequestClose={closeModal}
        closeTimeoutMS={250}
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
            <div className='btn__modal d-flex justify-content-around '>
              <button
                    type="submit"
                    className="btn btn-outline-danger"
                    onClick={handleDeleteRecipe}
                >
                    
                    <span> Delete</span>
                </button>
                <button
                    type="submit"
                    className="btn btn-outline-primary"
                    onClick={handleEditRecipe}
                >
                    
                    <span> Editar</span>
                </button>   
            </div>

          </form>
        </Modal>
    )
}
