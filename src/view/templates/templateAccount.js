const templateViewAccount = `
    <div class="content">
        <div class="containerAccount" id="containerAccount">

            <div class="userProfile" id="userProfile"> </div>

            <div class="userBio"> </div>
        
            <div class="alignCenter">

                <div class="containerWriter">

                    <div class="userProfile">
                    <img id="photoUser">
                    <div>
                        <p class="nameUser"><bold id="nameUser"></bold></p>
                    </div>
                    </div> 

                    <form class="containerTextPost" id="formPublishAccount">
                        <textarea class="textareaPublish" id="textPost" rows="3" placeholder="¿Qué estás pensando?"></textarea>
                
                        <div class="containerIconsBtn">
                            <div class="addPost">
                                <input id="fichero" type="file">           
                                <label for="fichero" class="circle"> <i class="far fa-image"></i> </label>
                                <a href="#"><i class="fas fa-unlock-alt ico"></i></a>
                                <button class="postBtn" id="btnPublish">Publicar</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div id="postContainerAccount"> </div>

            </div>
        </div>
    </div>

    <div id="miModalPublishVoid" class="closeModal">    
        <div  class="modal-contenidoReturn">
            <h5 class="h2Modal">Tu publicación está vacia!</h5>
            <div class="groupBtnOptionsReturn"> 
                <button  id="btnReturn" class="btnOptions">Volver</button>     
            </div> 
        </div> 
    </div> 
 
    `;

const templateViewAccountProfileUser = `
    <div class="profileUserCover">
        <div class="userProfileAvatar"  id="userProfileAvatar">
            <img class="photoPerfil" id="photoPerfil"alt="">
            <button type="button" class="boton-avatar" >
                <i class="far fa-image"></i>
            </button>
        </div>
        <button type="button" class="boton-portada" >
            <i class="far fa-image"></i> Cambiar fondo
        </button>
    </div> `;

const templateViewAccountProfileUserBio = /*html*/`
    <div class="userProfileBody">
        <div class="userProfileBio" id="userProfileBio">
            <h3 class="name" ></h3>
            <p class="texto"></p>
        </div>
        <div class="perfil-usuario-footer">
            <ul class="lista-datos">
                <li><i class="icono fas fa-at"></i>E-mail:</li>
                <li><i class="icono fas fa-bolt"></i>Intereses:</li>
                <li><i class="icono fas fa-map-marker-alt"></i>Locación:</li>
                <li><i class="icono fas fa-share-alt"></i>Redes sociales:</li>
            </ul>
            <button type="button" class="boton-portada" id ="editAccountUser" >
                <i class="fas fa-user-edit"></i> Editar perfil
            </button>
        </div> 
        <div id="miModal" class="modal">
        <div class="modal-contenido">
            <ul class="lista-datos">
            <li><i class="icono fas fa-at"></i><input type="text" placeholder="E-mail"></li>
            <li><i class="icono fas fa-bolt"></i>Intereses:</li>
            <li><i class="icono fas fa-map-marker-alt"></i>Locación:</li>
            <li><i class="icono fas fa-share-alt"></i>Redes sociales:</li>
            </ul>
        </div>  
        </div>

    </div> `;

export {
    templateViewAccount,
    templateViewAccountProfileUser,
    templateViewAccountProfileUserBio
}