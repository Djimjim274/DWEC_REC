let horas, minutos, segundos;
      let segundosF, minutosF, horasF;

      horas = 23;
      minutos = 59;
      segundos = 59;

      segundosF = segundos + 1;
      minutosF = minutos;
      horasF = horas;

      if (segundosF === 60) {
        segundosF = 0;
        minutosF++;

        if (minutosF === 60) {
          minutosF = 0;
          horasF++;

          if (horasF === 24) {
            horasF = 0;
          }
        }
      }

      console.log(`la hora serìa ${horasF}:${minutosF}:${segundosF}  `);