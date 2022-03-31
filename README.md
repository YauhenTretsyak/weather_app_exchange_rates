Link do podglądu projektu na gh-pages: [React Weather App](https://yauhentretsyak.github.io/weather_app_exchange_rates/)<br>

wersja 0.1.1 - dodano kurs dolara, euro
wersja 0.2.0 - dodano pogoda długoterminowa na 5 dni, logika została przepisana z contextApi na Redux Toolkit 

Aplikacja na podstawie lokalizacji użytkownika (użytkownik na początku musi wyrazić zgodę na pobieranie danych lokalizacji) wyświetla dane pogody aktualnego miasta.<br>
Przyciskiem można wybrać wyświetlanie temperatury w K lub C. <br>
Jest możliwość wyszukiwania pogody po nazwie miasta, lub po zip-codu miasta. Dla poprawnego wyszukiwania powinno być prawidłowo wisano nazwa, lub zip-code, w przeciwnym przypadku wyświetli się menu z tektem błędu.<br>
Także jest opcja zapisywania miasta do listy (przy naciśnięciu na wybrany list będzie wyświetlono pogoda wybranego miasta z listy) i opcja usunięcia wybranego miasta z listy. Przy odnowieniu strony spis zapisanych miast nie przepada.<br>
Przycisk zapisu aktywny na początku i w moment kiedy zostało zmieniono miasto, po nacisnęciu przyciska miasto zapisuje się do listy, a sam przycisk przechodzi do stanu 'nie aktywny'.<br>
Strona jest responsywna.

