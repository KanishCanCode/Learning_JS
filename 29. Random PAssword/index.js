       function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumber, includeSymbols) {
            const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
            const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const numberChars = "0123456789";
            const symbolChars = "`~!@#$%^&*()_+-=";
            let allowedChars = "";
            let password = "";

            allowedChars += includeLowercase ? lowercaseChars : "";
            allowedChars += includeUppercase ? uppercaseChars : "";
            allowedChars += includeNumber ? numberChars : "";
            allowedChars += includeSymbols ? symbolChars : "";

            if (passwordLength <= 0) {
                return `(password length must be at least 1)`;
            }
            if (allowedChars.length === 0) {
                return `(At least 1 set of characters need to be selected)`;
            }

            for (let i = 0; i < passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * allowedChars.length);
                password += allowedChars[randomIndex];
            }

            return password;
        }

        function generate() {
            const passwordLength = parseInt(document.getElementById('passwordLength').value);
            const includeLowercase = document.getElementById('includeLowercase').checked;
            const includeUppercase = document.getElementById('includeUppercase').checked;
            const includeNumber = document.getElementById('includeNumber').checked;
            const includeSymbols = document.getElementById('includeSymbols').checked;

            const password = generatePassword(
                passwordLength,
                includeLowercase,
                includeUppercase,
                includeNumber,
                includeSymbols
            );

            const displayElement = document.getElementById('passwordDisplay');
            const copyBtn = document.getElementById('copyBtn');
            
            displayElement.textContent = password;
            
            if (password.startsWith('(')) {
                displayElement.classList.add('error');
                copyBtn.classList.add('hidden');
            } else {
                displayElement.classList.remove('error');
                copyBtn.classList.remove('hidden');
            }
        }

        function copyPassword() {
            const password = document.getElementById('passwordDisplay').textContent;
            navigator.clipboard.writeText(password).then(() => {
                const copyBtn = document.getElementById('copyBtn');
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                }, 2000);
            });
        }