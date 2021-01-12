import React from 'react'
import './ContactStructure.css'

function ContactStructure() {
    return (
        <div className='contact__page'>
            <div className='contact__faq'>
                <details>  
                    <summary>Comment puis-je commander des produits depuis votre site?</summary>  
                    <p>Prenez contact avec nous par le biais du formulaire ci contre en remplissant les champs.</p>
                    <p>Dans le dernier champs écrivez toutes les références des machine voulues, nosu vous enverons ensuite un devis ou nous vous rappelerons.</p>
                </details>
                <details>  
                    <summary>Quels sont les délais de livraison de mes commandes?</summary>  
                    <p>Il faut compter 3 à 4 semaines avant de recevoir les machines</p>
                    <p></p>
                </details>
                <details>  
                    <summary>Quand dois-je effectuer le paiement de ma commande?</summary>  
                    <p>Le paiement de la commande s'effectu au début de la commande, avant le processus de fabrication des machines</p>
                    <p></p>
                </details>
                <details>  
                    <summary>Ou dois-je effectuer le paiement de ma commande?</summary>  
                    <p>Le paiement de la commande est à faire à cette adresse 2 Rue de la paie 69000 LYON, en carte bancaire ou en virement bancaire</p>
                    <p></p>
                </details>
            </div>

            <div className='contact__form'>
                <form>
                    <input type='text' placeholder='Nom'></input>
                    <input type='text' placeholder='Prenom'></input>
                    <input type='text' placeholder='Nom de votre société'></input>
                    <input type='text' placeholder='télNom de votre éphone pour être recontacté'></input>
                    <input type='email' placeholder='votre email pour être recontacté'></input>
                    <textarea type='text' placeholder='rentrez les références et quantité des machines voulues ici'></textarea>
                    <button type='submit' className='send__btn'>Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default ContactStructure
