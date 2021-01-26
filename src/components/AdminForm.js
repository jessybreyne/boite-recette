import React from 'react';

const AdminForm = () => {
    return (
        <div className="card">
            <form className="admin-form">
                <input value={this.state.nom} onChange={this.handleChange} name='nom' type="text" placeholder='Nom de la recette'/>
                <input value={this.state.image} onChange={this.handleChange} name='image' type="text" placeholder="Nom de l'image"/>
                <textarea 
                    value={this.state.ingredients} 
                    onChange={this.handleChange}
                    name='ingredients' 
                    rows="3"
                    placeholder="Liste des ingrédients"
                >
                </textarea>
                <textarea 
                    value={this.state.instructions} 
                    onChange={this.handleChange}
                    name='instructions' 
                    rows="15"
                    placeholder="Liste des instructions"
                >
                </textarea>
            </form>
            <button>Supprimer</button>
        </div>
    );
};

export default AdminForm;