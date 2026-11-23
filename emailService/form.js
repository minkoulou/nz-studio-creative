// envoie de formulaire par email via web3form

const WEB3FORMS_ACCESS_KEY="022090b5-dca8-4e35-8c38-785252636d08"
const WEB3FORMS_URL='https://api.web3forms.com/submit'

document.querySelectorAll('form[data-subject]').forEach((form)=>{
    const btn=form.querySelector('button[type="submit"]');
    const btnLabel=btn.textContent;

    // message de statut sous le bouton

    const status=document.createElement('p');
    status.className='form__status';
    status.setAttribute('role','status');
    btn.insertAdjacentElement('afterend',status);

    // piege Anti-spam

    const trap=document.createElement('input');
    trap.type='checkbox';
    trap.name='botcheck';
    trap.tabIndex=-1;
    trap.setAttribute('aria-hidden','true');
    trap.style.display='none';
    form.appendChild(trap)

    form.addEventListener('submit',async (e)=>{
        e.preventDefault();
        status.className='form__status';
        status.textContent='';

        const data=new FormData(form);
        data.append('access_key',WEB3FORMS_ACCESS_KEY);
        data.append('subject',form.dataset.subject);
        data.append('from_name','site NZ STUDIO CREATIVE');

        // remplace le name de la balise selcte par sa valeur meme (carto par  cartographie et tecabilite)

        const select=form.querySelector('select[name="service"]');
         if(select && select.value){
            data.set('service',select.options[select.selectedIndex].text);
         }

         btn.disabled=true;
         btn.textContent='Envoie en cours...';

         try {
            const res= await fetch(WEB3FORMS_URL,{
                method:'POST',
                headers: {Accept:'application/json'},
                body:data,
            });

            const json = await res.json();
            if(res.ok && json.success) {
                form.reset();
                status.classList.add('form__status--ok');
                status.textContent = 'Merci ! Votre message a bien été envoyé'
            }else{
                throw new Error(json.message || 'Erreur');

            }
            
         } catch (err) {
            
            status.classList.add('form__status--err');
            status.textContent="L'envoi a échoué. Réessayez ou écrivez-nous sur WhatsApp."
         }finally{
            btn.disabled=false;
            btn.textContent=btnLabel;
         }

    })

})
