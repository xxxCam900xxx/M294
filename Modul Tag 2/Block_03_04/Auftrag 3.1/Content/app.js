let log = document.getElementById('eventlog');
        let lastEvent;
        // Funktion zur Aufzeichnung des Events
        function logEvent(event) {
            console.log(lastEvent);
            console.log(event.type);
            if (lastEvent != event.type) {
                let eventblock = document.createElement('p');
                eventblock.innerHTML = 'Event aufgezeichnet: <span>' + event.type + '</span>';
                lastEvent = event.type;
                log.append(eventblock);
            }

            log.scrollTop = log.scrollHeight;
        }

        // Alle DOM-Elemente auswählen, an denen du Events aufzeichnen möchtest
        const elements = document.querySelectorAll('*');

        // Event-Listener zu den ausgewählten Elementen hinzufügen
        elements.forEach(function (element) {
            // Hier kannst du festlegen, welche Events du aufzeichnen möchtest
            const eventsToRecord = [
                'click',
                'dblclick',
                'mousedown',
                'mouseup',
                'mousemove',
                'mouseover',
                'mouseout',
                'keydown',
                'keyup',
                'keypress',
                'input',
                'change',
                'focus',
                'blur',
                'cut',
                'copy',
                'paste',
                'select',
                // Weitere Event-Typen können hier hinzugefügt werden
            ];

            // Event-Listener für jedes ausgewählte Event hinzufügen
            eventsToRecord.forEach(function (eventType) {
                element.addEventListener(eventType, logEvent);
            });
        });