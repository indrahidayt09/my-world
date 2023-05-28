musik = "";
    foto = "img1.gif";
    background = "";
    noWhatsapp = "081574808331";

    async function popUp() {

        await swalo.fire({
            title: "",
            imageUrl: ""
        });

        kirimPesan();

    }
    $(window).on("load", function () {
        $(".preload").fadeOut("slow");
    });
    var audio = new Audio(musik);
    audio.autoplay = true;
    audio.loop = true;
    bg.style = 'background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("' + background +
        '");';
    fotoku.src = foto;
    popupku();
    var swalo = Swal.mixin({
        allowOutsideClick: false
    });
    async function kirimPesan() {
        var {
            value: pesan
        } = await swalo.fire({
            title: "Tulis sesuatu",
            input: "text",
            confirmButtonText: "Kirim"
        });
        if (pesan) {
            await swalo.fire("Kirim ke wa aku ya jawaban nya");
            location.assign("https://api.whatsapp.com/send?phone=" + noWhatsapp + "&text=" + pesan);
        } else {
            await swalo.fire({
                confirmButtonText: "Iya deh",
                title: "Jangan dikosongin atuh accipa :)"
            });
            kirimPesan();
        }
    }
    document.querySelector("span").addEventListener("click", function () {
        popUp();
    });
    var open = document.querySelector(".open");

    function ilang() {
        audio.play();
        open.style =
            "transition: 1.5s ease-out all; opacity: 0; transform: scale(100) translateY(-20px); filter: brightness(0);";
        setTimeout(function () {
            open.style = "display:none;";
        }, 1500);
        setTimeout(function () {
            fotoku.style = "opacity: 1; transition: 1s all ease; transform: translateY(0px) scale(1);";
        }, 500);
        setTimeout(function () {
            hai.style = "opacity: 1; transition: 1s all ease; transform: translateY(0px);";
        }, 1400);
        setTimeout(function () {
            hia.style = "opacity: 1; transition: 1s all ease; transform: translateY(0px);";
        }, 1800);
        setTimeout(function () {
            slider.style = "opacity: 1; transition: 1s all ease; transform: translateY(0px) scale(1);";
        }, 2200);
    }

    function popupku() {
        var body = document.querySelector("body");      
        var pWm = document.createElement("a");
        pWm.setAttribute("href", "https://youtube.com/dekatutorial");
        pWm.setAttribute("style", "text-decoration: none; font-size: 0.5rem; color: white; opacity: .1; position: fixed; bottom : 8px; left: 8px");
        pWm.innerHTML = "created by indra hidayat";
        body.appendChild(pWm);
      }