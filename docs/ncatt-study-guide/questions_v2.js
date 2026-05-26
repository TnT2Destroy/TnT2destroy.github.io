const allQuestionsRaw = [
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Active vs Passive Filters",
        "text": "What is the key difference between an active filter and a passive filter in a power supply circuit?",
        "options": [
            {
                "text": "An active filter produces a current or voltage gain, while a passive filter produces no gain",
                "isCorrect": true
            },
            {
                "text": "An active filter uses only resistors, while a passive filter uses capacitors",
                "isCorrect": false
            },
            {
                "text": "A passive filter requires an external power source to operate",
                "isCorrect": false
            },
            {
                "text": "An active filter can only be used in DC circuits, not AC circuits",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Passive Filters",
        "text": "A technician is troubleshooting a power supply and finds the filter section produces no gain in the electrical circuit. What type of filter is this?",
        "options": [
            {
                "text": "A passive filter",
                "isCorrect": true
            },
            {
                "text": "An active filter",
                "isCorrect": false
            },
            {
                "text": "A regenerative filter",
                "isCorrect": false
            },
            {
                "text": "A crystal filter",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 101
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Filter Purpose",
        "text": "What is the primary purpose of a filter in a power supply circuit?",
        "options": [
            {
                "text": "To smooth the pulsating DC output from a rectifier into a steady DC voltage",
                "isCorrect": true
            },
            {
                "text": "To convert AC voltage into DC voltage",
                "isCorrect": false
            },
            {
                "text": "To increase the output voltage of the power supply",
                "isCorrect": false
            },
            {
                "text": "To protect the circuit from reverse polarity connections",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 113
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Capacitor Input Filter",
        "text": "In a capacitor input filter (pi filter), what component is placed in parallel with the load to reduce ripple voltage?",
        "options": [
            {
                "text": "A capacitor",
                "isCorrect": true
            },
            {
                "text": "A resistor",
                "isCorrect": false
            },
            {
                "text": "A diode",
                "isCorrect": false
            },
            {
                "text": "A transformer",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 113
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Active Filters",
        "text": "Which characteristic distinguishes an active filter from other filter types?",
        "options": [
            {
                "text": "It produces a current or voltage gain in the circuit",
                "isCorrect": true
            },
            {
                "text": "It uses only passive components like resistors and capacitors",
                "isCorrect": false
            },
            {
                "text": "It can only filter frequencies above 1 MHz",
                "isCorrect": false
            },
            {
                "text": "It does not require any semiconductor devices",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 161
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Ripple Voltage",
        "text": "After rectification, the output contains a pulsating component called ripple. What does the filter circuit do to this ripple?",
        "options": [
            {
                "text": "It reduces the ripple to produce a smoother DC output",
                "isCorrect": true
            },
            {
                "text": "It amplifies the ripple to increase output power",
                "isCorrect": false
            },
            {
                "text": "It converts the ripple back into AC for reuse",
                "isCorrect": false
            },
            {
                "text": "It increases the ripple frequency to improve efficiency",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 70
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Choke Input Filter",
        "text": "In a choke input filter, an inductor (choke) is placed in series with the load. What is the inductor's role?",
        "options": [
            {
                "text": "It opposes changes in current flow, which helps smooth the pulsating DC output",
                "isCorrect": true
            },
            {
                "text": "It stores energy in an electrostatic field to boost voltage",
                "isCorrect": false
            },
            {
                "text": "It rectifies the remaining AC component in the signal",
                "isCorrect": false
            },
            {
                "text": "It increases the ripple frequency to make filtering easier",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 114
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Bleeder Resistor",
        "text": "What is the function of a bleeder resistor in a filtered power supply circuit?",
        "options": [
            {
                "text": "It discharges the filter capacitors when the power supply is turned off, preventing shock hazard",
                "isCorrect": true
            },
            {
                "text": "It increases the output voltage by reducing internal resistance",
                "isCorrect": false
            },
            {
                "text": "It converts AC ripple into DC by absorbing excess current",
                "isCorrect": false
            },
            {
                "text": "It protects the rectifier diodes from reverse voltage spikes",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 115
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Filter Capacitor Function",
        "text": "How does a filter capacitor reduce ripple in a rectifier output?",
        "options": [
            {
                "text": "It charges during voltage peaks and discharges during voltage dips, filling in the gaps",
                "isCorrect": true
            },
            {
                "text": "It blocks all DC voltage and passes only the AC ripple to ground",
                "isCorrect": false
            },
            {
                "text": "It converts the pulsating DC into a higher frequency AC signal",
                "isCorrect": false
            },
            {
                "text": "It increases the resistance in the circuit to limit current flow",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 115
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Filter Location",
        "text": "In a typical power supply, where is the filter circuit located?",
        "options": [
            {
                "text": "Between the rectifier output and the load",
                "isCorrect": true
            },
            {
                "text": "Between the AC input and the transformer",
                "isCorrect": false
            },
            {
                "text": "Before the transformer primary winding",
                "isCorrect": false
            },
            {
                "text": "In parallel with the rectifier diodes",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Passive Filter Components",
        "text": "Which components are typically used in a passive power supply filter?",
        "options": [
            {
                "text": "Capacitors, inductors (chokes), and resistors",
                "isCorrect": true
            },
            {
                "text": "Transistors, operational amplifiers, and capacitors",
                "isCorrect": false
            },
            {
                "text": "Diodes, transformers, and fuses",
                "isCorrect": false
            },
            {
                "text": "Integrated circuits, voltage regulators, and resistors",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 65
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Full-wave vs Half-wave Ripple",
        "text": "Why does a full-wave rectifier produce a ripple that is easier to filter than a half-wave rectifier?",
        "options": [
            {
                "text": "Because the full-wave ripple frequency is twice the input frequency, leaving smaller gaps for the filter to fill",
                "isCorrect": true
            },
            {
                "text": "Because full-wave rectifiers use larger capacitors in their design",
                "isCorrect": false
            },
            {
                "text": "Because full-wave rectifiers eliminate all AC components automatically",
                "isCorrect": false
            },
            {
                "text": "Because full-wave rectifiers operate at lower voltages",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 402
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Pi Filter",
        "text": "A pi (\u03c0) filter in a power supply consists of which arrangement of components?",
        "options": [
            {
                "text": "A capacitor, followed by an inductor (or resistor) in series, followed by another capacitor in parallel",
                "isCorrect": true
            },
            {
                "text": "Two inductors in series separated by a resistor",
                "isCorrect": false
            },
            {
                "text": "A single large capacitor connected directly across the load",
                "isCorrect": false
            },
            {
                "text": "Three resistors arranged in a delta configuration",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 68
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Voltage Regulation",
        "text": "A power supply circuit is designed to keep the output voltage constant as the load current changes. This describes which function?",
        "options": [
            {
                "text": "Voltage regulation",
                "isCorrect": true
            },
            {
                "text": "Ripple amplification",
                "isCorrect": false
            },
            {
                "text": "Frequency modulation",
                "isCorrect": false
            },
            {
                "text": "Current rectification",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 120
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Filter Effectiveness",
        "text": "A technician measures excessive ripple voltage at the output of a filtered power supply. Which component is most likely faulty?",
        "options": [
            {
                "text": "The filter capacitor may be open or have lost capacitance",
                "isCorrect": true
            },
            {
                "text": "The power cord has too much resistance",
                "isCorrect": false
            },
            {
                "text": "The load resistor is too large",
                "isCorrect": false
            },
            {
                "text": "The AC input frequency has changed",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 113
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Theory of Operation",
        "text": "What is the relationship between current flowing through a conductor and the magnetic field around it that makes inductors useful?",
        "options": [
            {
                "text": "Current flowing through a conductor creates a magnetic field, and coiling the wire into an inductor concentrates this field to store energy",
                "isCorrect": true
            },
            {
                "text": "Inductors convert magnetic energy directly into heat for circuit protection",
                "isCorrect": false
            },
            {
                "text": "The magnetic field around a straight conductor is stronger than around a coil",
                "isCorrect": false
            },
            {
                "text": "Inductors only work with DC current because AC cannot create a magnetic field",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 80
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Physical Factors",
        "text": "Which four physical factors affect the inductance of a coil?",
        "options": [
            {
                "text": "Number of turns, core material (permeability), cross-sectional area, and length of the coil",
                "isCorrect": true
            },
            {
                "text": "Wire color, solder type, mounting position, and ambient temperature",
                "isCorrect": false
            },
            {
                "text": "Voltage rating, current capacity, resistance value, and power dissipation",
                "isCorrect": false
            },
            {
                "text": "Frequency of operation, duty cycle, impedance, and capacitance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 81
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Inductive Reactance",
        "text": "A technician needs to calculate the inductive reactance (XL) of a coil. Which formula is correct?",
        "options": [
            {
                "text": "XL = 2\u03c0fL, where f is frequency and L is inductance in henries",
                "isCorrect": true
            },
            {
                "text": "XL = 1/(2\u03c0fL), where f is frequency and L is inductance",
                "isCorrect": false
            },
            {
                "text": "XL = V/I, where V is voltage and I is current",
                "isCorrect": false
            },
            {
                "text": "XL = R \u00d7 L, where R is resistance and L is inductance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 85
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Inductor Behavior in AC",
        "text": "In an AC circuit containing an inductor, what is the phase relationship between voltage and current?",
        "options": [
            {
                "text": "Voltage leads current \u2014 remembered by the mnemonic ELI (E leads I in an inductor L)",
                "isCorrect": true
            },
            {
                "text": "Current leads voltage by 90 degrees",
                "isCorrect": false
            },
            {
                "text": "Voltage and current are always in phase through an inductor",
                "isCorrect": false
            },
            {
                "text": "Current leads voltage by 45 degrees",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 88
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Unit of Measurement",
        "text": "The unit of inductance is the henry (H). One henry is defined as the inductance of a coil when:",
        "options": [
            {
                "text": "A change of current of one ampere per second induces an EMF of one volt",
                "isCorrect": true
            },
            {
                "text": "One volt of AC produces one ampere of current through the coil",
                "isCorrect": false
            },
            {
                "text": "The coil stores one joule of energy at one ampere of current",
                "isCorrect": false
            },
            {
                "text": "The magnetic field reaches one tesla of flux density",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 36
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Counter-EMF",
        "text": "When current through an inductor changes, the inductor generates a counter-EMF. What does this counter-EMF do?",
        "options": [
            {
                "text": "It opposes the change in current, causing the inductor to resist sudden increases or decreases in current flow",
                "isCorrect": true
            },
            {
                "text": "It doubles the applied voltage to protect downstream components",
                "isCorrect": false
            },
            {
                "text": "It converts the DC current into AC current automatically",
                "isCorrect": false
            },
            {
                "text": "It eliminates all resistance in the circuit",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 80
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Energy Storage",
        "text": "An inductor stores energy in what form?",
        "options": [
            {
                "text": "In a magnetic field surrounding the coil",
                "isCorrect": true
            },
            {
                "text": "In an electrostatic field between its plates",
                "isCorrect": false
            },
            {
                "text": "As chemical energy within the core material",
                "isCorrect": false
            },
            {
                "text": "As heat energy in the wire resistance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 70
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Multiple Inductors",
        "text": "When two inductors are connected in series (with no mutual inductance), how is total inductance calculated?",
        "options": [
            {
                "text": "Total inductance equals the sum of the individual inductances: LT = L1 + L2",
                "isCorrect": true
            },
            {
                "text": "Total inductance is the product divided by the sum: LT = (L1 \u00d7 L2)/(L1 + L2)",
                "isCorrect": false
            },
            {
                "text": "Total inductance equals the difference: LT = L1 \u2212 L2",
                "isCorrect": false
            },
            {
                "text": "Total inductance is always equal to the smallest inductor value",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 86
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Inductor vs Capacitor",
        "text": "How does an inductor's behavior with frequency differ from a capacitor's behavior?",
        "options": [
            {
                "text": "An inductor's opposition to current (XL) increases with frequency, while a capacitor's opposition (XC) decreases with frequency",
                "isCorrect": true
            },
            {
                "text": "Both inductors and capacitors have identical opposition at all frequencies",
                "isCorrect": false
            },
            {
                "text": "An inductor's opposition decreases with frequency, while a capacitor's increases",
                "isCorrect": false
            },
            {
                "text": "Neither component is affected by changes in frequency",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 84
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Core Material",
        "text": "Why does an iron-core inductor have a higher inductance than an air-core inductor of the same dimensions?",
        "options": [
            {
                "text": "Iron has higher magnetic permeability, which concentrates the magnetic field and increases inductance",
                "isCorrect": true
            },
            {
                "text": "Iron reduces the resistance of the wire, allowing more current to flow",
                "isCorrect": false
            },
            {
                "text": "Air cores create eddy currents that reduce inductance",
                "isCorrect": false
            },
            {
                "text": "Iron cores have lower permeability, which forces more energy into the magnetic field",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 81
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC / AC Basic Circuit Measurements",
        "topic": "Ammeter Connection",
        "text": "How must an ammeter be connected in a circuit to correctly measure current flow?",
        "options": [
            {
                "text": "In series with the load so that all circuit current flows through the meter",
                "isCorrect": true
            },
            {
                "text": "In parallel across the load to measure voltage drop",
                "isCorrect": false
            },
            {
                "text": "Between the two terminals of the power source with the circuit open",
                "isCorrect": false
            },
            {
                "text": "Across the switch contacts with the switch in the open position",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 341
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC / AC Basic Circuit Measurements",
        "topic": "Voltmeter Connection",
        "text": "A technician needs to measure the voltage drop across a resistor in a live circuit. How should the voltmeter be connected?",
        "options": [
            {
                "text": "In parallel (across) the resistor while the circuit is energized",
                "isCorrect": true
            },
            {
                "text": "In series with the resistor so current flows through the meter",
                "isCorrect": false
            },
            {
                "text": "The circuit must be de-energized before connecting the voltmeter",
                "isCorrect": false
            },
            {
                "text": "Between the resistor and ground with the resistor removed from the circuit",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 342
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC / AC Basic Circuit Measurements",
        "topic": "Ohmmeter Safety",
        "text": "Before using an ohmmeter to measure resistance in a component, what critical step must a technician take?",
        "options": [
            {
                "text": "Ensure all power to the circuit is turned off to prevent damage to the meter and get accurate readings",
                "isCorrect": true
            },
            {
                "text": "Set the meter to the highest voltage range first",
                "isCorrect": false
            },
            {
                "text": "Connect the ohmmeter in series with the power supply",
                "isCorrect": false
            },
            {
                "text": "Apply full rated voltage across the component being tested",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 342
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC / AC Basic Circuit Measurements",
        "topic": "Multimeter",
        "text": "Which instrument is considered the most versatile electrical measuring instrument used by aircraft technicians?",
        "options": [
            {
                "text": "The multimeter (DMM), which can measure voltage, current, and resistance in one instrument",
                "isCorrect": true
            },
            {
                "text": "The oscilloscope, which can only display waveforms",
                "isCorrect": false
            },
            {
                "text": "The megohmmeter, which measures only very high resistances",
                "isCorrect": false
            },
            {
                "text": "The wattmeter, which measures only power consumption",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 341
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC / AC Basic Circuit Measurements",
        "topic": "Ammeter Ranges",
        "text": "Some ammeters are designed to measure very small currents. What units do these specialized ammeters use?",
        "options": [
            {
                "text": "Milliamps (mA) and microamps (\u03bcA)",
                "isCorrect": true
            },
            {
                "text": "Kilovolts (kV) and megavolts (MV)",
                "isCorrect": false
            },
            {
                "text": "Kilohms (k\u03a9) and megohms (M\u03a9)",
                "isCorrect": false
            },
            {
                "text": "Watts (W) and kilowatts (kW)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 181
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC / AC Basic Circuit Measurements",
        "topic": "Meter Accuracy",
        "text": "What does 'allowable error' mean when referring to a meter's specifications?",
        "options": [
            {
                "text": "It indicates how close the meter's displayed value is to the actual value being measured",
                "isCorrect": true
            },
            {
                "text": "It refers to how many times the meter can be dropped before it breaks",
                "isCorrect": false
            },
            {
                "text": "It shows the maximum voltage the meter can withstand before damage",
                "isCorrect": false
            },
            {
                "text": "It measures the time delay between connecting the meter and getting a reading",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 47
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC / AC Basic Circuit Measurements",
        "topic": "Switch Testing",
        "text": "A technician suspects a switch is faulty. Which meter and method provides an effective and quick way to test the condition of a switch?",
        "options": [
            {
                "text": "An ohmmeter \u2014 check for continuity (near zero ohms) when closed and infinite resistance when open",
                "isCorrect": true
            },
            {
                "text": "A voltmeter \u2014 measure voltage across the switch while it is disconnected from the circuit",
                "isCorrect": false
            },
            {
                "text": "An ammeter \u2014 connect it in parallel with the switch to measure leakage",
                "isCorrect": false
            },
            {
                "text": "A wattmeter \u2014 measure the power consumed by the switch",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 353
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC / AC Basic Circuit Measurements",
        "topic": "AC vs DC Measurement",
        "text": "When measuring AC voltage with a multimeter, what value does the meter typically display?",
        "options": [
            {
                "text": "The RMS (Root Mean Square) effective value, which equals 0.707 of the peak value",
                "isCorrect": true
            },
            {
                "text": "The peak-to-peak value, which is the total swing of the waveform",
                "isCorrect": false
            },
            {
                "text": "The instantaneous value at the moment of measurement",
                "isCorrect": false
            },
            {
                "text": "The average value, which equals 0.5 of the peak value",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 75
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC / AC Basic Circuit Measurements",
        "topic": "Ammeter Danger",
        "text": "What can happen if an ammeter is accidentally connected in parallel across a voltage source?",
        "options": [
            {
                "text": "The very low internal resistance of the ammeter creates a near short circuit, potentially damaging the meter and blowing a fuse",
                "isCorrect": true
            },
            {
                "text": "The ammeter will simply display zero because no current flows in parallel",
                "isCorrect": false
            },
            {
                "text": "The ammeter automatically switches to voltmeter mode for protection",
                "isCorrect": false
            },
            {
                "text": "The reading will be inaccurate but the meter will not be damaged",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 341
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC / AC Basic Circuit Measurements",
        "topic": "Range Selection",
        "text": "When unsure of the value to be measured, what is the correct practice for selecting a meter range?",
        "options": [
            {
                "text": "Start with the highest range and work down to avoid overloading and damaging the meter",
                "isCorrect": true
            },
            {
                "text": "Always use the lowest range for the most accurate reading",
                "isCorrect": false
            },
            {
                "text": "Use the auto-off feature and let the meter choose automatically in all cases",
                "isCorrect": false
            },
            {
                "text": "Start with the middle range as a compromise between accuracy and safety",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 352
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Color Codes",
        "topic": "Four-Band Identification",
        "text": "In a standard four-band resistor color code, what do the four bands represent in order?",
        "options": [
            {
                "text": "First significant digit, second significant digit, multiplier (power of ten), and tolerance",
                "isCorrect": true
            },
            {
                "text": "Tolerance, multiplier, second digit, and first digit (read right to left)",
                "isCorrect": false
            },
            {
                "text": "Voltage rating, current capacity, resistance value, and manufacturer code",
                "isCorrect": false
            },
            {
                "text": "Temperature coefficient, wattage rating, first digit, and second digit",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 38
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Color Codes",
        "topic": "Color Values",
        "text": "A resistor has the following color bands: Brown, Black, Red, Gold. What is its resistance value and tolerance?",
        "options": [
            {
                "text": "1,000 ohms (1 k\u03a9) \u00b15%",
                "isCorrect": true
            },
            {
                "text": "100 ohms \u00b110%",
                "isCorrect": false
            },
            {
                "text": "10,000 ohms (10 k\u03a9) \u00b15%",
                "isCorrect": false
            },
            {
                "text": "10 ohms \u00b120%",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 39
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Color Codes",
        "topic": "Tolerance Band",
        "text": "On a four-band resistor, a gold tolerance band indicates what level of accuracy?",
        "options": [
            {
                "text": "\u00b15% tolerance",
                "isCorrect": true
            },
            {
                "text": "\u00b110% tolerance",
                "isCorrect": false
            },
            {
                "text": "\u00b11% tolerance",
                "isCorrect": false
            },
            {
                "text": "\u00b120% tolerance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 38
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Color Codes",
        "topic": "Silver Tolerance",
        "text": "If a resistor's fourth band is silver, what does this indicate about the resistor?",
        "options": [
            {
                "text": "The resistor has a \u00b110% tolerance",
                "isCorrect": true
            },
            {
                "text": "The resistor has a \u00b15% tolerance",
                "isCorrect": false
            },
            {
                "text": "The resistor has a \u00b11% tolerance",
                "isCorrect": false
            },
            {
                "text": "The resistor is a precision wire-wound type",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 39
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Color Codes",
        "topic": "No Tolerance Band",
        "text": "What does it mean if a resistor has no fourth band (tolerance band)?",
        "options": [
            {
                "text": "The resistor has a \u00b120% tolerance",
                "isCorrect": true
            },
            {
                "text": "The resistor is defective and should not be used",
                "isCorrect": false
            },
            {
                "text": "The resistor has a \u00b10% (exact) tolerance",
                "isCorrect": false
            },
            {
                "text": "The tolerance is printed on the resistor body instead",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 39
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Color Codes",
        "topic": "Color Sequence",
        "text": "The mnemonic 'Big Bears Romp On Yellow Grass But Violets Grow Without' helps remember the resistor color code sequence. What are the first four colors in order (values 0-3)?",
        "options": [
            {
                "text": "Black (0), Brown (1), Red (2), Orange (3)",
                "isCorrect": true
            },
            {
                "text": "Blue (0), Brown (1), Red (2), Orange (3)",
                "isCorrect": false
            },
            {
                "text": "Black (0), Blue (1), Red (2), Orange (3)",
                "isCorrect": false
            },
            {
                "text": "Brown (0), Black (1), Red (2), Orange (3)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 39
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Color Codes",
        "topic": "Reading Example",
        "text": "A resistor has bands of Red, Violet, Orange, Silver. What is its value?",
        "options": [
            {
                "text": "27,000 ohms (27 k\u03a9) \u00b110%",
                "isCorrect": true
            },
            {
                "text": "2,700 ohms (2.7 k\u03a9) \u00b15%",
                "isCorrect": false
            },
            {
                "text": "270 ohms \u00b110%",
                "isCorrect": false
            },
            {
                "text": "270,000 ohms (270 k\u03a9) \u00b15%",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 39
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Color Codes",
        "topic": "Alternative Methods",
        "text": "Besides reading color code bands, what are two other ways to determine a resistor's value?",
        "options": [
            {
                "text": "Refer to the schematic diagram or measure it with an ohmmeter",
                "isCorrect": true
            },
            {
                "text": "Measure the voltage across it or weigh it on a scale",
                "isCorrect": false
            },
            {
                "text": "Check the wire gauge or measure the physical length",
                "isCorrect": false
            },
            {
                "text": "Read the batch number or check the purchase order",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 38
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Color Codes",
        "topic": "Multiplier Band",
        "text": "On a four-band resistor, the third band is the multiplier. If the third band is orange, what multiplier value does it represent?",
        "options": [
            {
                "text": "1,000 (10\u00b3) \u2014 multiply the two-digit number by 1,000",
                "isCorrect": true
            },
            {
                "text": "3 \u2014 multiply the two-digit number by 3",
                "isCorrect": false
            },
            {
                "text": "100 (10\u00b2) \u2014 multiply the two-digit number by 100",
                "isCorrect": false
            },
            {
                "text": "30 \u2014 multiply the two-digit number by 30",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 38
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Color Codes",
        "topic": "Surface Mount Resistors",
        "text": "How are surface-mount resistors typically marked, unlike standard axial resistors?",
        "options": [
            {
                "text": "With numerical markings rather than color bands \u2014 you must refer to a technical drawing for values",
                "isCorrect": true
            },
            {
                "text": "With a single large color dot on top indicating the resistance value",
                "isCorrect": false
            },
            {
                "text": "They are never marked and must always be measured with a meter",
                "isCorrect": false
            },
            {
                "text": "With the same four-band color code system but on a smaller scale",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 38
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Fault Isolation",
        "topic": "Open Primary Coil",
        "text": "A technician finds that a fuse or circuit breaker in the power source keeps opening when a transformer is connected. What transformer fault is most likely?",
        "options": [
            {
                "text": "A shorted primary coil, which draws excessive current and trips the overcurrent protection",
                "isCorrect": true
            },
            {
                "text": "An open secondary coil, which causes the primary to overheat",
                "isCorrect": false
            },
            {
                "text": "The transformer is installed backwards, reversing the voltage",
                "isCorrect": false
            },
            {
                "text": "The core laminations have become magnetized permanently",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 353
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Fault Isolation",
        "topic": "Open Secondary Coil",
        "text": "A transformer's primary coil is energized, but the secondary output reads zero volts. An ohmmeter check of the secondary shows infinite resistance. What is the fault?",
        "options": [
            {
                "text": "An open secondary coil \u2014 there is no coupling action (imperfect coupling) and no current path",
                "isCorrect": true
            },
            {
                "text": "The primary coil has too many turns, reducing secondary voltage to zero",
                "isCorrect": false
            },
            {
                "text": "The transformer core is saturated from excessive DC input",
                "isCorrect": false
            },
            {
                "text": "The load connected to the secondary is too large",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 353
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Fault Isolation",
        "topic": "Resistance Testing",
        "text": "When performing resistance testing on a transformer to check for insulation breakdown, what are you looking for?",
        "options": [
            {
                "text": "Breakdown of insulators or conductors between the primary and secondary coils",
                "isCorrect": true
            },
            {
                "text": "The exact turns ratio by measuring the DC resistance of each winding",
                "isCorrect": false
            },
            {
                "text": "The frequency response of the transformer core material",
                "isCorrect": false
            },
            {
                "text": "The voltage gain between input and output terminals",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 199
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Fault Isolation",
        "topic": "Continuity Check",
        "text": "A technician uses an ohmmeter to check a transformer. The primary winding reads very low resistance, but the secondary winding reads infinite (OL). What does this indicate?",
        "options": [
            {
                "text": "The primary winding is intact, but the secondary winding has an open circuit fault",
                "isCorrect": true
            },
            {
                "text": "Both windings are functioning normally for a step-up transformer",
                "isCorrect": false
            },
            {
                "text": "The transformer is a special high-impedance type and is working correctly",
                "isCorrect": false
            },
            {
                "text": "The ohmmeter leads are connected incorrectly",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 199
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Fault Isolation",
        "topic": "Improper Installation",
        "text": "What types of problems can result from a transformer that is improperly installed or non-compliant to industry standards?",
        "options": [
            {
                "text": "Excessive vibration, overheating, insulation breakdown, and potential electrical hazards",
                "isCorrect": true
            },
            {
                "text": "The transformer will automatically shut down and display an error code",
                "isCorrect": false
            },
            {
                "text": "The output voltage will always be exactly double the rated value",
                "isCorrect": false
            },
            {
                "text": "Improper installation only affects appearance and has no effect on performance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 264
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Basic Principle",
        "text": "A transformer transfers electrical energy from one circuit to another through what principle?",
        "options": [
            {
                "text": "Electromagnetic induction \u2014 a changing magnetic field in the primary coil induces a voltage in the secondary coil",
                "isCorrect": true
            },
            {
                "text": "Direct electrical contact between the primary and secondary windings",
                "isCorrect": false
            },
            {
                "text": "Electrostatic charge stored in the core material",
                "isCorrect": false
            },
            {
                "text": "Resistance heating of the core that radiates energy to the secondary",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 70
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Step-Up Transformer",
        "text": "A step-up transformer has more turns on which winding, and what effect does this have?",
        "options": [
            {
                "text": "More turns on the secondary coil, which increases the output voltage above the input voltage",
                "isCorrect": true
            },
            {
                "text": "More turns on the primary coil, which increases current in the secondary",
                "isCorrect": false
            },
            {
                "text": "Equal turns on both coils, with voltage increase achieved by core saturation",
                "isCorrect": false
            },
            {
                "text": "More turns on the secondary coil, which increases both voltage and current equally",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 103
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Step-Down Transformer",
        "text": "An aircraft system requires 12V from a 28V bus. What type of transformer would be used?",
        "options": [
            {
                "text": "A step-down transformer, which has fewer turns in the secondary than the primary",
                "isCorrect": true
            },
            {
                "text": "A step-up transformer with a 2:1 turns ratio",
                "isCorrect": false
            },
            {
                "text": "An isolation transformer with equal turns on both windings",
                "isCorrect": false
            },
            {
                "text": "A current transformer connected in parallel with the bus",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 103
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Turns Ratio",
        "text": "A transformer has 100 turns on the primary and 500 turns on the secondary. If 24V AC is applied to the primary, what is the secondary voltage?",
        "options": [
            {
                "text": "120V AC \u2014 the turns ratio is 1:5, so voltage is multiplied by 5",
                "isCorrect": true
            },
            {
                "text": "4.8V AC \u2014 voltage is divided by the turns ratio",
                "isCorrect": false
            },
            {
                "text": "24V AC \u2014 transformers do not change voltage, only current",
                "isCorrect": false
            },
            {
                "text": "600V AC \u2014 primary turns are added to the secondary voltage",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 103
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "AC Only",
        "text": "Why does a transformer only work with AC voltage and not DC?",
        "options": [
            {
                "text": "A transformer requires a continuously changing magnetic field to induce voltage, which only AC provides",
                "isCorrect": true
            },
            {
                "text": "DC voltage is too high for transformer windings to handle safely",
                "isCorrect": false
            },
            {
                "text": "Transformers can work with both AC and DC equally well",
                "isCorrect": false
            },
            {
                "text": "DC creates a stronger magnetic field that saturates the core instantly",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 70
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Mutual Inductance",
        "text": "The transfer of energy between transformer windings occurs through mutual inductance. What does this mean?",
        "options": [
            {
                "text": "The changing current in one coil induces a voltage in the nearby coil through their shared magnetic field",
                "isCorrect": true
            },
            {
                "text": "Both coils must be physically connected by a wire for energy transfer",
                "isCorrect": false
            },
            {
                "text": "The two coils must have identical resistance values for coupling to occur",
                "isCorrect": false
            },
            {
                "text": "Energy transfers only when both coils carry current simultaneously",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 84
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Core Losses",
        "text": "What are the two main types of power losses that occur in a transformer core?",
        "options": [
            {
                "text": "Eddy current losses and hysteresis losses",
                "isCorrect": true
            },
            {
                "text": "Capacitive losses and inductive losses",
                "isCorrect": false
            },
            {
                "text": "Forward bias losses and reverse bias losses",
                "isCorrect": false
            },
            {
                "text": "Thermal losses and gravitational losses",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 104
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Isolation Transformer",
        "text": "An isolation transformer has a 1:1 turns ratio. What is its primary purpose?",
        "options": [
            {
                "text": "To electrically isolate the secondary circuit from the primary while maintaining the same voltage",
                "isCorrect": true
            },
            {
                "text": "To double the output voltage for high-power applications",
                "isCorrect": false
            },
            {
                "text": "To convert AC to DC without using rectifier diodes",
                "isCorrect": false
            },
            {
                "text": "To reduce the frequency of the AC signal by half",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 88
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Power Conservation",
        "text": "In an ideal transformer, if the voltage is stepped up by a factor of 10, what happens to the available current?",
        "options": [
            {
                "text": "Current is reduced by a factor of 10 \u2014 power (V \u00d7 I) remains approximately constant",
                "isCorrect": true
            },
            {
                "text": "Current also increases by a factor of 10, multiplying the output power",
                "isCorrect": false
            },
            {
                "text": "Current remains the same because transformers only change voltage",
                "isCorrect": false
            },
            {
                "text": "Current drops to zero because the impedance becomes infinite",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 146
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Laminated Core",
        "text": "Why are transformer cores made of thin laminated sheets of iron rather than a solid block?",
        "options": [
            {
                "text": "To reduce eddy current losses by breaking up the current paths within the core",
                "isCorrect": true
            },
            {
                "text": "To make the transformer lighter for aircraft applications",
                "isCorrect": false
            },
            {
                "text": "To increase the magnetic permeability of the core material",
                "isCorrect": false
            },
            {
                "text": "To allow the core to flex during thermal expansion without cracking",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 102
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Diode Function",
        "text": "What is the fundamental function of a diode in a rectifier circuit?",
        "options": [
            {
                "text": "It allows current to flow in one direction only, converting AC to pulsating DC",
                "isCorrect": true
            },
            {
                "text": "It amplifies the AC signal to increase voltage output",
                "isCorrect": false
            },
            {
                "text": "It stores electrical energy for release during peak demand",
                "isCorrect": false
            },
            {
                "text": "It changes the frequency of the AC input signal",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Half-Wave Rectifier",
        "text": "What is the output DC voltage of a half-wave rectifier compared to its input AC voltage?",
        "options": [
            {
                "text": "Approximately one half of the input AC peak voltage, pulsating at the input frequency",
                "isCorrect": true
            },
            {
                "text": "Equal to the full input AC voltage with no pulsation",
                "isCorrect": false
            },
            {
                "text": "Double the input AC voltage due to the diode's amplification",
                "isCorrect": false
            },
            {
                "text": "Approximately 70.7% (RMS) of the input AC voltage",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Full-Wave Rectifier",
        "text": "How does a full-wave rectifier differ from a half-wave rectifier in terms of output?",
        "options": [
            {
                "text": "A full-wave rectifier uses both halves of the AC cycle, producing pulsating DC at twice the input frequency",
                "isCorrect": true
            },
            {
                "text": "A full-wave rectifier outputs pure DC with zero ripple",
                "isCorrect": false
            },
            {
                "text": "A full-wave rectifier only works with three-phase AC input",
                "isCorrect": false
            },
            {
                "text": "There is no practical difference \u2014 both produce identical outputs",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Forward Bias",
        "text": "What voltage must be applied to forward-bias a typical silicon diode and cause it to conduct?",
        "options": [
            {
                "text": "Approximately 0.7 VDC of the correct polarity",
                "isCorrect": true
            },
            {
                "text": "At least 5.0 VDC regardless of polarity",
                "isCorrect": false
            },
            {
                "text": "Exactly 1.5 VDC, matching a standard battery cell",
                "isCorrect": false
            },
            {
                "text": "Any voltage above 0.0 VDC will cause immediate conduction",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 116
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Reverse Bias",
        "text": "What happens when voltage is applied in the reverse direction to a semiconductor diode?",
        "options": [
            {
                "text": "The diode enters a high-resistance state and will not support the conduction of electricity",
                "isCorrect": true
            },
            {
                "text": "The diode conducts normally in both directions",
                "isCorrect": false
            },
            {
                "text": "The diode immediately burns out and must be replaced",
                "isCorrect": false
            },
            {
                "text": "The diode converts the DC back into AC automatically",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 108
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Bridge Rectifier",
        "text": "A bridge rectifier uses four diodes arranged in a specific configuration. What advantage does this provide over a center-tapped full-wave rectifier?",
        "options": [
            {
                "text": "It does not require a center-tapped transformer and uses the full secondary voltage",
                "isCorrect": true
            },
            {
                "text": "It uses fewer diodes, reducing cost and complexity",
                "isCorrect": false
            },
            {
                "text": "It eliminates all ripple voltage without needing a filter",
                "isCorrect": false
            },
            {
                "text": "It can convert DC to AC as well as AC to DC",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Ripple Amplitude",
        "text": "What is ripple amplitude in the context of a rectifier circuit output?",
        "options": [
            {
                "text": "The frequency and magnitude of the pulsating component remaining in the rectifier's DC output",
                "isCorrect": true
            },
            {
                "text": "The maximum voltage the rectifier can produce under full load",
                "isCorrect": false
            },
            {
                "text": "The speed at which the diodes switch between conducting and blocking states",
                "isCorrect": false
            },
            {
                "text": "The physical vibration of the transformer core during operation",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Semiconductor Materials",
        "text": "What are the two principal semiconductor materials used in rectifier diodes?",
        "options": [
            {
                "text": "Germanium and silicon \u2014 in their pure state they are insulators, but adding dopants makes them semiconductors",
                "isCorrect": true
            },
            {
                "text": "Copper and aluminum \u2014 standard conductor materials used in all diodes",
                "isCorrect": false
            },
            {
                "text": "Iron and nickel \u2014 ferromagnetic materials essential for diode operation",
                "isCorrect": false
            },
            {
                "text": "Carbon and tungsten \u2014 high-temperature materials for aerospace diodes",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 107
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Wave generation Circuits",
        "topic": "Oscillator Purpose",
        "text": "What is the primary purpose of an oscillator circuit?",
        "options": [
            {
                "text": "To generate a repetitive waveform at a constant amplitude and specific frequency, maintaining it within certain limits",
                "isCorrect": true
            },
            {
                "text": "To convert AC power into DC power for electronic equipment",
                "isCorrect": false
            },
            {
                "text": "To amplify weak input signals to usable output levels",
                "isCorrect": false
            },
            {
                "text": "To filter unwanted noise from communication signals",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 161
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Wave generation Circuits",
        "topic": "Oscillator Basic Function",
        "text": "An oscillator is described as an electronic circuit that converts DC into AC at predetermined frequencies and amplitudes. What prevents the oscillation from dying out?",
        "options": [
            {
                "text": "An amplifier within the circuit \u2014 without it, oscillation would be quickly dampened by wiring resistance",
                "isCorrect": true
            },
            {
                "text": "The natural resonance of the power supply keeps the oscillation going indefinitely",
                "isCorrect": false
            },
            {
                "text": "A rectifier circuit that feeds energy back from the output to the input",
                "isCorrect": false
            },
            {
                "text": "Permanent magnets inside the oscillator sustain the waveform magnetically",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 62
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Wave generation Circuits",
        "topic": "Crystal-Controlled Oscillator",
        "text": "What determines the output frequency of a crystal-controlled oscillator?",
        "options": [
            {
                "text": "The resonant frequency of the piezoelectric crystal inside the oscillator",
                "isCorrect": true
            },
            {
                "text": "The DC supply voltage applied to the circuit",
                "isCorrect": false
            },
            {
                "text": "The resistance value of the feedback resistor",
                "isCorrect": false
            },
            {
                "text": "The physical size of the circuit board",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 168
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Wave generation Circuits",
        "topic": "Hartley Oscillator",
        "text": "What distinguishes a Hartley oscillator from other oscillator types?",
        "options": [
            {
                "text": "It uses a tapped coil (inductor) in parallel with a capacitor to control the AC frequency",
                "isCorrect": true
            },
            {
                "text": "It uses only resistors and capacitors with no inductors",
                "isCorrect": false
            },
            {
                "text": "It requires a piezoelectric crystal for frequency control",
                "isCorrect": false
            },
            {
                "text": "It can only produce square wave outputs, not sine waves",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 81
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Wave generation Circuits",
        "topic": "Regenerative Feedback",
        "text": "What is the role of a regenerative (positive) feedback path in an oscillator?",
        "options": [
            {
                "text": "It feeds a portion of the output signal back to the input in phase, sustaining oscillation \u2014 it makes any amplifier an oscillator",
                "isCorrect": true
            },
            {
                "text": "It reduces the output amplitude to prevent distortion",
                "isCorrect": false
            },
            {
                "text": "It converts the sine wave output into a square wave",
                "isCorrect": false
            },
            {
                "text": "It removes unwanted harmonics from the output signal",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 174
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Wave generation Circuits",
        "topic": "LC Tank Circuit",
        "text": "In an LC tank circuit used in oscillators, how is energy stored?",
        "options": [
            {
                "text": "Energy alternates between the inductor (magnetic field) and capacitor (electrostatic field), producing a sinusoidal output",
                "isCorrect": true
            },
            {
                "text": "Energy is stored only in the resistive elements as heat",
                "isCorrect": false
            },
            {
                "text": "Energy is stored in the DC power supply and released in pulses",
                "isCorrect": false
            },
            {
                "text": "Energy is stored in the wiring insulation as static charge",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 97
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Wave generation Circuits",
        "topic": "Harmonic Oscillator",
        "text": "A harmonic oscillator produces useful power at two or three times the frequency of its fundamental pulse rate. What are these higher frequencies called?",
        "options": [
            {
                "text": "Harmonics \u2014 they are integer multiples of the fundamental frequency",
                "isCorrect": true
            },
            {
                "text": "Subharmonics \u2014 they are fractions of the fundamental frequency",
                "isCorrect": false
            },
            {
                "text": "Sidebands \u2014 they are created by amplitude modulation",
                "isCorrect": false
            },
            {
                "text": "Overtones \u2014 they only exist in mechanical vibration, not electronic circuits",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 64
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Theory of Operation",
        "topic": "Time Constant",
        "text": "What is the RC time constant of a capacitor circuit, and what does it represent?",
        "options": [
            {
                "text": "The time (in seconds) for the voltage across a capacitor to reach 63.2% of the applied voltage, calculated as T = R \u00d7 C",
                "isCorrect": true
            },
            {
                "text": "The time for a capacitor to fully discharge to zero volts, calculated as T = V \u00d7 I",
                "isCorrect": false
            },
            {
                "text": "The frequency at which the capacitor has zero reactance, calculated as T = 1/f",
                "isCorrect": false
            },
            {
                "text": "The maximum time a capacitor can hold its charge before leaking, measured in hours",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 68
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Theory of Operation",
        "topic": "Capacitance Definition",
        "text": "Capacitance is the amount of electrical charge that can be stored in a capacitor. What determines the amount of charge stored?",
        "options": [
            {
                "text": "The amount of electrical pressure (voltage) applied and the physical characteristics of the capacitor",
                "isCorrect": true
            },
            {
                "text": "Only the frequency of the applied signal determines charge storage",
                "isCorrect": false
            },
            {
                "text": "The wire gauge used to connect the capacitor to the circuit",
                "isCorrect": false
            },
            {
                "text": "The ambient temperature alone controls how much charge is stored",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 28
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Theory of Operation",
        "topic": "Variable Capacitors",
        "text": "How does a variable capacitor change its capacitance value, and what is its typical dielectric?",
        "options": [
            {
                "text": "By changing the overlapping area of its plates \u2014 the dielectric is normally air",
                "isCorrect": true
            },
            {
                "text": "By heating the plates to expand them \u2014 the dielectric is ceramic",
                "isCorrect": false
            },
            {
                "text": "By adding or removing electrolyte fluid \u2014 the dielectric is oil",
                "isCorrect": false
            },
            {
                "text": "By stretching the dielectric material \u2014 the plates remain fixed",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 81
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Theory of Operation",
        "topic": "Capacitors in AC",
        "text": "What is the phase relationship between voltage and current in a purely capacitive AC circuit?",
        "options": [
            {
                "text": "Current leads voltage by 90 degrees \u2014 remembered by ICE (I leads E in a capacitor C)",
                "isCorrect": true
            },
            {
                "text": "Voltage leads current by 90 degrees",
                "isCorrect": false
            },
            {
                "text": "Voltage and current are always in phase in a capacitive circuit",
                "isCorrect": false
            },
            {
                "text": "Current lags voltage by 45 degrees",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 91
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Theory of Operation",
        "topic": "Capacitors in Series",
        "text": "When capacitors are connected in series, what happens to the total capacitance?",
        "options": [
            {
                "text": "Total capacitance decreases \u2014 it is calculated like resistors in parallel: 1/CT = 1/C1 + 1/C2",
                "isCorrect": true
            },
            {
                "text": "Total capacitance increases \u2014 values are simply added together",
                "isCorrect": false
            },
            {
                "text": "Total capacitance remains equal to the largest capacitor value",
                "isCorrect": false
            },
            {
                "text": "Total capacitance doubles with each additional capacitor added",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 90
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Theory of Operation",
        "topic": "Electrolytic Capacitors",
        "text": "Why must electrolytic capacitors be installed with correct polarity?",
        "options": [
            {
                "text": "Reversed polarity can damage the thin oxide dielectric layer, causing the capacitor to overheat or explode",
                "isCorrect": true
            },
            {
                "text": "Polarity only affects the color of the indicator LED on the capacitor",
                "isCorrect": false
            },
            {
                "text": "Reversed polarity doubles the capacitance value, overloading the circuit",
                "isCorrect": false
            },
            {
                "text": "Electrolytic capacitors work in both directions but are less efficient when reversed",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 184
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Theory of Operation",
        "topic": "Working Voltage",
        "text": "What does the 'working voltage' rating of a capacitor specify?",
        "options": [
            {
                "text": "The maximum DC voltage that can be safely applied across the capacitor without dielectric breakdown",
                "isCorrect": true
            },
            {
                "text": "The minimum voltage required for the capacitor to begin storing charge",
                "isCorrect": false
            },
            {
                "text": "The voltage the capacitor produces when fully charged",
                "isCorrect": false
            },
            {
                "text": "The AC frequency at which the capacitor operates most efficiently",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 116
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Handling Electrostatic Devices",
        "topic": "ESD Prevention",
        "text": "What is the primary purpose of wearing a grounding wrist strap when handling electrostatic-sensitive devices?",
        "options": [
            {
                "text": "To continuously discharge static electricity from your body to prevent ESD damage to sensitive components",
                "isCorrect": true
            },
            {
                "text": "To protect the technician from electrical shock when working on live circuits",
                "isCorrect": false
            },
            {
                "text": "To improve grip when handling small electronic components",
                "isCorrect": false
            },
            {
                "text": "To measure the static charge on components before installation",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 272
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Handling Electrostatic Devices",
        "topic": "Grounded Workstation",
        "text": "When working with ESD-sensitive components, what should a technician's workstation include?",
        "options": [
            {
                "text": "Grounded workstation surfaces and equipment, including a conductive mat connected to ground",
                "isCorrect": true
            },
            {
                "text": "A rubber mat to insulate the workstation from ground",
                "isCorrect": false
            },
            {
                "text": "A high-voltage power supply to neutralize static charges",
                "isCorrect": false
            },
            {
                "text": "A fan to blow away static charge from the work area",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 272
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Handling Electrostatic Devices",
        "topic": "Static Electricity",
        "text": "Why is static electricity considered a nuisance rather than a useful form of electricity in electronics maintenance?",
        "options": [
            {
                "text": "It serves little useful purpose and can invisibly damage or degrade sensitive semiconductor devices",
                "isCorrect": true
            },
            {
                "text": "Static electricity is too powerful to control in a maintenance environment",
                "isCorrect": false
            },
            {
                "text": "Static electricity only affects mechanical components, not electronic ones",
                "isCorrect": false
            },
            {
                "text": "It is useful but too expensive to harness for practical applications",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 107
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Handling Electrostatic Devices",
        "topic": "Device Handling",
        "text": "What is a critical rule when handling an ESD-sensitive circuit board or component?",
        "options": [
            {
                "text": "Handle the device safely and properly \u2014 hold boards by their edges and avoid touching pins or traces",
                "isCorrect": true
            },
            {
                "text": "Always hold the component by its most sensitive pins for better grip",
                "isCorrect": false
            },
            {
                "text": "Rub the component against your clothing to discharge any built-up static",
                "isCorrect": false
            },
            {
                "text": "Place the component on a plastic bag to insulate it from the workbench",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 262
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Handling Electrostatic Devices",
        "topic": "ESD Packaging",
        "text": "ESD-sensitive components are typically shipped and stored in what type of packaging?",
        "options": [
            {
                "text": "Conductive or static-shielding bags that prevent static charge from reaching the component",
                "isCorrect": true
            },
            {
                "text": "Standard cardboard boxes with foam peanut padding",
                "isCorrect": false
            },
            {
                "text": "Clear plastic bags that allow visual inspection",
                "isCorrect": false
            },
            {
                "text": "Wooden crates lined with newspaper for cushioning",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 272
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Handling Electrostatic Devices",
        "topic": "ESD Damage Types",
        "text": "How can ESD damage a semiconductor device even if it still appears to function after the event?",
        "options": [
            {
                "text": "ESD can cause latent damage \u2014 weakening internal junctions so the device degrades over time and fails later in service",
                "isCorrect": true
            },
            {
                "text": "ESD only causes immediate catastrophic failure, so if it works it is undamaged",
                "isCorrect": false
            },
            {
                "text": "ESD damage only affects the device's physical appearance, not its function",
                "isCorrect": false
            },
            {
                "text": "ESD always resets the device to factory settings without causing harm",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 271
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Frequency Sensitive Filter - Theory of Operation",
        "topic": "Low-Pass Filter",
        "text": "What does a low-pass filter do in an electronic circuit?",
        "options": [
            {
                "text": "It allows low frequencies to pass from the source to the load and blocks or attenuates high frequencies",
                "isCorrect": true
            },
            {
                "text": "It blocks all frequencies below a certain cutoff point",
                "isCorrect": false
            },
            {
                "text": "It amplifies low-frequency signals while leaving high frequencies unchanged",
                "isCorrect": false
            },
            {
                "text": "It converts low-frequency AC into DC voltage",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 411
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Frequency Sensitive Filter - Theory of Operation",
        "topic": "High-Pass Filter",
        "text": "A high-pass filter passes high frequencies and attenuates low frequencies. Where is it placed in a circuit?",
        "options": [
            {
                "text": "Between the signal source (generator) and the load, acting as a frequency-sensitive voltage divider",
                "isCorrect": true
            },
            {
                "text": "In parallel with the power supply to boost high-frequency output",
                "isCorrect": false
            },
            {
                "text": "After the load to prevent high frequencies from returning to the source",
                "isCorrect": false
            },
            {
                "text": "Inside the signal generator to pre-filter the output",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 171
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Frequency Sensitive Filter - Theory of Operation",
        "topic": "Band-Pass Filter",
        "text": "What does a band-pass filter do?",
        "options": [
            {
                "text": "It passes a certain band of middle frequencies while attenuating both high and low frequencies using resonant circuits",
                "isCorrect": true
            },
            {
                "text": "It passes all frequencies equally without any attenuation",
                "isCorrect": false
            },
            {
                "text": "It blocks only one specific frequency and passes all others",
                "isCorrect": false
            },
            {
                "text": "It converts a band of AC frequencies into DC voltage",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 170
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Frequency Sensitive Filter - Theory of Operation",
        "topic": "Band-Reject Filter",
        "text": "How does a band-reject (notch) filter differ from a band-pass filter?",
        "options": [
            {
                "text": "A band-reject filter attenuates a certain band of middle frequencies while passing the high and low frequencies",
                "isCorrect": true
            },
            {
                "text": "A band-reject filter passes all frequencies including the target band",
                "isCorrect": false
            },
            {
                "text": "A band-reject filter only works with DC signals, not AC",
                "isCorrect": false
            },
            {
                "text": "There is no difference \u2014 they are two names for the same circuit",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 171
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Frequency Sensitive Filter - Theory of Operation",
        "topic": "Cutoff Frequency",
        "text": "What is the cutoff frequency of a filter?",
        "options": [
            {
                "text": "The frequency at which attenuation starts to increase rapidly \u2014 the boundary between passed and blocked frequencies",
                "isCorrect": true
            },
            {
                "text": "The maximum frequency the circuit can physically handle before components fail",
                "isCorrect": false
            },
            {
                "text": "The frequency at which the filter produces maximum output power",
                "isCorrect": false
            },
            {
                "text": "The input frequency required to turn the filter circuit on",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 170
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Frequency Sensitive Filter - Theory of Operation",
        "topic": "Crystal Filters",
        "text": "How are piezoelectric crystals used in filter circuits?",
        "options": [
            {
                "text": "Thin slivers of quartz crystal vibrate at a specific resonant frequency when voltage is applied, helping reject unwanted signals",
                "isCorrect": true
            },
            {
                "text": "Crystals generate their own power to run the filter without an external source",
                "isCorrect": false
            },
            {
                "text": "Crystals are used only as physical insulators between filter stages",
                "isCorrect": false
            },
            {
                "text": "Crystals amplify all frequencies equally to improve signal strength",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 168
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Identify & Perform Corrosion Control",
        "topic": "Corrosion Definition",
        "text": "What is corrosion as it relates to aircraft maintenance?",
        "options": [
            {
                "text": "Chemical or electrochemical deterioration of a material, usually metal, due to a reaction with its environment",
                "isCorrect": true
            },
            {
                "text": "Physical wear caused by friction between two moving parts",
                "isCorrect": false
            },
            {
                "text": "Cracking of metal due to repeated stress loading cycles",
                "isCorrect": false
            },
            {
                "text": "Discoloration of paint caused by UV exposure from sunlight",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 316
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Identify & Perform Corrosion Control",
        "topic": "Intergranular Corrosion",
        "text": "Intergranular corrosion is a particularly dangerous form of corrosion on aircraft. Where does it form?",
        "options": [
            {
                "text": "Within the metal along the grain boundaries of the metal structure, often invisible on the surface",
                "isCorrect": true
            },
            {
                "text": "Only on the outer painted surfaces of the aircraft skin",
                "isCorrect": false
            },
            {
                "text": "Between rubber seals and glass windshield panels",
                "isCorrect": false
            },
            {
                "text": "Only in aluminum alloys that have been anodized",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 316
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Identify & Perform Corrosion Control",
        "topic": "Corrosion Prevention",
        "text": "Which of the following is an effective method for preventing corrosion on aircraft structures?",
        "options": [
            {
                "text": "Applying sealants that prevent moisture and chemicals from contacting and damaging metals",
                "isCorrect": true
            },
            {
                "text": "Leaving metal surfaces bare to allow natural oxidation to form a protective layer",
                "isCorrect": false
            },
            {
                "text": "Heating the metal to high temperatures after each flight",
                "isCorrect": false
            },
            {
                "text": "Applying a thin coat of motor oil to all structural components weekly",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 322
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Identify & Perform Corrosion Control",
        "topic": "Dissimilar Metals",
        "text": "Why is corrosion accelerated when two dissimilar metals are in contact in the presence of moisture?",
        "options": [
            {
                "text": "The two metals create a galvanic cell where the more active metal corrodes preferentially as an electrochemical reaction occurs",
                "isCorrect": true
            },
            {
                "text": "Dissimilar metals generate heat from friction which causes oxidation",
                "isCorrect": false
            },
            {
                "text": "The harder metal physically grinds away the softer metal",
                "isCorrect": false
            },
            {
                "text": "Moisture dissolves both metals equally regardless of their composition",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 320
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Identify & Perform Corrosion Control",
        "topic": "Surface Corrosion",
        "text": "A technician notices a white powdery substance on an aluminum aircraft skin panel. What type of corrosion is this likely?",
        "options": [
            {
                "text": "Surface corrosion \u2014 aluminum oxide forms as a white or gray powder when aluminum reacts with its environment",
                "isCorrect": true
            },
            {
                "text": "Stress corrosion cracking \u2014 the powder indicates internal fractures",
                "isCorrect": false
            },
            {
                "text": "Fretting corrosion \u2014 caused by two surfaces vibrating against each other",
                "isCorrect": false
            },
            {
                "text": "Filiform corrosion \u2014 caused by improper paint adhesion",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 316
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Identify & Perform Corrosion Control",
        "topic": "Corrosion Inspection",
        "text": "When inspecting for corrosion on aircraft, what is an important first step?",
        "options": [
            {
                "text": "Clean the area thoroughly so corrosion can be properly identified and its extent assessed",
                "isCorrect": true
            },
            {
                "text": "Apply paint over the suspected area to see if the corrosion bleeds through",
                "isCorrect": false
            },
            {
                "text": "Apply voltage across the metal to see if current flows through corroded areas",
                "isCorrect": false
            },
            {
                "text": "Heat the surface with a torch to reveal hidden corrosion underneath",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 188
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Identify & Perform Corrosion Control",
        "topic": "Corrosion Treatment",
        "text": "After removing corrosion from an aircraft surface, what must be done to the treated area?",
        "options": [
            {
                "text": "Apply a protective treatment such as primer, sealant, or approved corrosion inhibitor to prevent recurrence",
                "isCorrect": true
            },
            {
                "text": "Leave the bare metal exposed to allow it to develop a natural protective patina",
                "isCorrect": false
            },
            {
                "text": "Sand the area with coarse grit sandpaper to create a rough texture that resists moisture",
                "isCorrect": false
            },
            {
                "text": "Apply salt water to test if the corrosion removal was complete",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 323
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Theory of Operation",
        "topic": "Series Circuit",
        "text": "In a series circuit with three resistors, what happens to the total circuit current if one resistor opens (fails open)?",
        "options": [
            {
                "text": "All current flow stops because a series circuit has only one path for current",
                "isCorrect": true
            },
            {
                "text": "Current increases because there is less total resistance",
                "isCorrect": false
            },
            {
                "text": "Current continues through the remaining two resistors at a reduced level",
                "isCorrect": false
            },
            {
                "text": "Current reverses direction and flows backward through the circuit",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 44
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Theory of Operation",
        "topic": "Parallel Circuit",
        "text": "In a parallel circuit, how does the total resistance compare to the smallest individual resistor?",
        "options": [
            {
                "text": "Total resistance is always less than the smallest individual resistor in the parallel combination",
                "isCorrect": true
            },
            {
                "text": "Total resistance equals the sum of all individual resistors",
                "isCorrect": false
            },
            {
                "text": "Total resistance equals the largest individual resistor value",
                "isCorrect": false
            },
            {
                "text": "Total resistance is the average of all individual resistor values",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 43
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Theory of Operation",
        "topic": "Kirchhoff's Voltage Law",
        "text": "In a series circuit with a 24V source and three resistors, voltage drops of 8V and 10V are measured across the first two resistors. What is the voltage drop across the third resistor?",
        "options": [
            {
                "text": "6V \u2014 the sum of all voltage drops must equal the source voltage (24 - 8 - 10 = 6)",
                "isCorrect": true
            },
            {
                "text": "24V \u2014 each resistor sees the full source voltage in a series circuit",
                "isCorrect": false
            },
            {
                "text": "18V \u2014 the remaining voltage is split equally between the last two resistors",
                "isCorrect": false
            },
            {
                "text": "0V \u2014 the voltage is used up by the first two resistors",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 44
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Theory of Operation",
        "topic": "Parallel Branch Current",
        "text": "In a parallel circuit, what determines how much current flows through each branch?",
        "options": [
            {
                "text": "The resistance of each branch \u2014 lower resistance branches carry more current (I = V/R)",
                "isCorrect": true
            },
            {
                "text": "Current is always divided equally among all branches regardless of resistance",
                "isCorrect": false
            },
            {
                "text": "Only the first branch receives current; the rest act as backups",
                "isCorrect": false
            },
            {
                "text": "The total circuit current determines individual branch current, not resistance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 47
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Theory of Operation",
        "topic": "Short Circuit",
        "text": "What happens in a circuit when a short circuit occurs across a load?",
        "options": [
            {
                "text": "Current increases dramatically because resistance drops to near zero, typically blowing a fuse or tripping a breaker",
                "isCorrect": true
            },
            {
                "text": "Current decreases because the short provides additional resistance",
                "isCorrect": false
            },
            {
                "text": "Voltage increases across the load due to the reduced resistance path",
                "isCorrect": false
            },
            {
                "text": "The circuit continues operating normally but at higher efficiency",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 120
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Theory of Operation",
        "topic": "Power Dissipation",
        "text": "A 100-ohm resistor has 0.5 amps flowing through it. How much power is it dissipating?",
        "options": [
            {
                "text": "25 watts \u2014 using the formula P = I\u00b2 \u00d7 R = (0.5)\u00b2 \u00d7 100 = 25W",
                "isCorrect": true
            },
            {
                "text": "50 watts \u2014 using P = I \u00d7 R",
                "isCorrect": false
            },
            {
                "text": "200 watts \u2014 using P = V \u00d7 R",
                "isCorrect": false
            },
            {
                "text": "0.5 watts \u2014 using P = I / R",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 41
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Ohm's Law Application",
        "text": "An aircraft circuit has a 28V DC bus powering a lamp with 4 ohms of resistance. What current flows through the lamp?",
        "options": [
            {
                "text": "7 amps \u2014 using Ohm's Law: I = E/R = 28/4 = 7A",
                "isCorrect": true
            },
            {
                "text": "112 amps \u2014 using I = E \u00d7 R",
                "isCorrect": false
            },
            {
                "text": "0.14 amps \u2014 using I = R/E",
                "isCorrect": false
            },
            {
                "text": "32 amps \u2014 using I = E + R",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 57
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Total Resistance Series",
        "text": "Three resistors of 10\u03a9, 20\u03a9, and 30\u03a9 are connected in series. What is the total resistance?",
        "options": [
            {
                "text": "60\u03a9 \u2014 in series, resistances are added: RT = R1 + R2 + R3",
                "isCorrect": true
            },
            {
                "text": "5.45\u03a9 \u2014 calculated using the parallel formula",
                "isCorrect": false
            },
            {
                "text": "20\u03a9 \u2014 the average of the three values",
                "isCorrect": false
            },
            {
                "text": "6,000\u03a9 \u2014 the product of all three values",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 55
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Power Formula",
        "text": "An aircraft system draws 5 amps from a 28V DC bus. How much power does it consume?",
        "options": [
            {
                "text": "140 watts \u2014 using P = E \u00d7 I = 28 \u00d7 5 = 140W",
                "isCorrect": true
            },
            {
                "text": "5.6 watts \u2014 using P = E / I",
                "isCorrect": false
            },
            {
                "text": "33 watts \u2014 using P = E + I",
                "isCorrect": false
            },
            {
                "text": "700 watts \u2014 using P = E \u00d7 I\u00b2",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 129
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Impedance",
        "text": "Impedance (Z) in an AC circuit represents the total opposition to current flow. What three factors does it combine?",
        "options": [
            {
                "text": "Resistance, capacitive reactance, and inductive reactance",
                "isCorrect": true
            },
            {
                "text": "Voltage, current, and power",
                "isCorrect": false
            },
            {
                "text": "Frequency, wavelength, and amplitude",
                "isCorrect": false
            },
            {
                "text": "Conductance, admittance, and susceptance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 62
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Power Factor",
        "text": "In an AC circuit, the power factor is the ratio of what two values?",
        "options": [
            {
                "text": "True power (watts) dissipated over apparent power (volt-amps) input",
                "isCorrect": true
            },
            {
                "text": "Input voltage over output voltage",
                "isCorrect": false
            },
            {
                "text": "DC resistance over AC impedance",
                "isCorrect": false
            },
            {
                "text": "Peak current over RMS current",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 65
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Voltage Divider",
        "text": "Two equal resistors of 100\u03a9 each are connected in series across a 28V source. What voltage appears across each resistor?",
        "options": [
            {
                "text": "14V \u2014 voltage divides proportionally to resistance, and equal resistors split voltage equally",
                "isCorrect": true
            },
            {
                "text": "28V \u2014 each resistor sees the full source voltage",
                "isCorrect": false
            },
            {
                "text": "56V \u2014 voltage doubles in a series circuit",
                "isCorrect": false
            },
            {
                "text": "0V \u2014 the resistors cancel each other out",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 44
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Perform Wire Maintenance",
        "topic": "Wire Gauge",
        "text": "As wire gauge numbers become larger (e.g., from 10 AWG to 22 AWG), what happens to the wire diameter?",
        "options": [
            {
                "text": "The wire diameter gets smaller \u2014 higher gauge numbers mean thinner wire",
                "isCorrect": true
            },
            {
                "text": "The wire diameter gets larger \u2014 higher numbers mean thicker wire",
                "isCorrect": false
            },
            {
                "text": "Wire diameter stays the same regardless of gauge number",
                "isCorrect": false
            },
            {
                "text": "The gauge number only indicates insulation thickness, not wire size",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 262
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Perform Wire Maintenance",
        "topic": "Twisted Pair Wire",
        "text": "What is the purpose of using twisted pair aircraft wire, such as in standby magnetic compass lighting circuits?",
        "options": [
            {
                "text": "Twisting the wires together helps cancel electromagnetic interference by causing induced noise to be equal and opposite in each wire",
                "isCorrect": true
            },
            {
                "text": "Twisted wires are stronger and resist vibration damage better than straight wires",
                "isCorrect": false
            },
            {
                "text": "Twisting reduces the wire gauge, allowing more current to flow",
                "isCorrect": false
            },
            {
                "text": "Twisted pairs are required by regulation for all aircraft circuits regardless of application",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 193
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Perform Wire Maintenance",
        "topic": "Wire Inspection",
        "text": "During a wire maintenance inspection, what conditions would require a wire to be replaced?",
        "options": [
            {
                "text": "Chafed, cracked, or burned insulation, corroded terminals, or evidence of overheating",
                "isCorrect": true
            },
            {
                "text": "Any wire that has been in service for more than one year regardless of condition",
                "isCorrect": false
            },
            {
                "text": "Only wires that have completely lost all insulation along their entire length",
                "isCorrect": false
            },
            {
                "text": "Wires that have changed color from their original factory color",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 364
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Perform Wire Maintenance",
        "topic": "Wire Stripping",
        "text": "When stripping insulation from aircraft wire, what must a technician avoid?",
        "options": [
            {
                "text": "Nicking, cutting, or scraping the conductor strands, which weakens the wire and can cause failure",
                "isCorrect": true
            },
            {
                "text": "Removing too little insulation \u2014 all stripping should expose at least 2 inches of conductor",
                "isCorrect": false
            },
            {
                "text": "Using wire strippers \u2014 a knife is the preferred tool for aircraft wire",
                "isCorrect": false
            },
            {
                "text": "Touching the bare conductor \u2014 skin oils improve the connection quality",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 232
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Perform Wire Maintenance",
        "topic": "Wire Bend Radius",
        "text": "Why is maintaining the proper bend radius important when routing aircraft wire?",
        "options": [
            {
                "text": "Too tight a bend can damage the conductor or insulation, leading to shorts, opens, or intermittent faults",
                "isCorrect": true
            },
            {
                "text": "Bend radius only affects the appearance of the wire bundle, not its function",
                "isCorrect": false
            },
            {
                "text": "Wire must always be routed in straight lines with no bends permitted",
                "isCorrect": false
            },
            {
                "text": "Tight bends increase the current-carrying capacity of the wire",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 232
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Perform Wire Maintenance",
        "topic": "Wire Splicing",
        "text": "What is the general rule regarding wire splices in aircraft wiring?",
        "options": [
            {
                "text": "Splices should be kept to a minimum and are not permitted in certain critical areas \u2014 always follow the manufacturer's maintenance manual",
                "isCorrect": true
            },
            {
                "text": "Splices are preferred over connectors because they provide a more reliable connection",
                "isCorrect": false
            },
            {
                "text": "Any wire can be spliced as many times as needed without restriction",
                "isCorrect": false
            },
            {
                "text": "Splices must be soldered and then wrapped with standard electrical tape",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 333
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Wire Identification",
        "text": "How are aircraft wires typically identified for tracing and troubleshooting?",
        "options": [
            {
                "text": "By a wire identification code printed or stamped on the insulation at regular intervals along the wire",
                "isCorrect": true
            },
            {
                "text": "By the color of the copper conductor inside the insulation",
                "isCorrect": false
            },
            {
                "text": "By the physical location of the wire \u2014 no markings are used in aircraft",
                "isCorrect": false
            },
            {
                "text": "By the weight of the wire per foot, measured during installation",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 425
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Wire Types",
        "text": "Aircraft wiring conductors are primarily made from which two materials?",
        "options": [
            {
                "text": "Copper and aluminum",
                "isCorrect": true
            },
            {
                "text": "Steel and titanium",
                "isCorrect": false
            },
            {
                "text": "Gold and platinum",
                "isCorrect": false
            },
            {
                "text": "Nickel and zinc",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 233
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Wire Routing",
        "text": "When routing wires through an aircraft, why must wires be kept away from hot surfaces such as exhaust manifolds?",
        "options": [
            {
                "text": "Heat can damage wire insulation, causing it to crack or melt, leading to short circuits or fires",
                "isCorrect": true
            },
            {
                "text": "Hot surfaces increase the current-carrying capacity beyond safe limits",
                "isCorrect": false
            },
            {
                "text": "Heat causes the copper conductor to expand and break the wire",
                "isCorrect": false
            },
            {
                "text": "Wire routing near heat sources is permitted if the wire is aluminum",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 259
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Wire Bundle Clamping",
        "text": "What is the purpose of clamping wire bundles at regular intervals in an aircraft?",
        "options": [
            {
                "text": "To support the wires, prevent chafing from vibration, and maintain proper routing and bend radius",
                "isCorrect": true
            },
            {
                "text": "To increase the electrical resistance of the bundle for current limiting",
                "isCorrect": false
            },
            {
                "text": "To color-code different circuits by using different colored clamps",
                "isCorrect": false
            },
            {
                "text": "Clamps are only decorative and have no functional purpose",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 232
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Connector Types",
        "text": "What is the function of a circular military-style (MIL-spec) connector used in aircraft wiring?",
        "options": [
            {
                "text": "To provide a reliable, vibration-resistant, and environmentally sealed connection that can be quickly disconnected for maintenance",
                "isCorrect": true
            },
            {
                "text": "To permanently fuse two wires together so they cannot be separated",
                "isCorrect": false
            },
            {
                "text": "To convert DC wiring to AC wiring at the connection point",
                "isCorrect": false
            },
            {
                "text": "To reduce the wire gauge at the junction for current limiting",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 359
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Grounding",
        "text": "Why is proper grounding critical in aircraft electrical systems?",
        "options": [
            {
                "text": "It provides a low-resistance return path for current, ensures circuit protection devices work, and prevents static charge buildup",
                "isCorrect": true
            },
            {
                "text": "Grounding is only needed for lightning protection and has no effect on normal circuits",
                "isCorrect": false
            },
            {
                "text": "Aircraft use a two-wire system so grounding is not necessary",
                "isCorrect": false
            },
            {
                "text": "Grounding increases circuit resistance to limit current in all systems",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 427
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Wire Selection",
        "text": "What factors must be considered when selecting the correct wire for an aircraft circuit?",
        "options": [
            {
                "text": "Current-carrying capacity, voltage rating, temperature rating, mechanical strength, and weight",
                "isCorrect": true
            },
            {
                "text": "Only the wire color and length matter for aircraft applications",
                "isCorrect": false
            },
            {
                "text": "Any wire rated for household use (14 AWG Romex) is acceptable in aircraft",
                "isCorrect": false
            },
            {
                "text": "Only the cost of the wire determines which type to use",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 232
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Terminal Lugs",
        "text": "When crimping a terminal lug onto an aircraft wire, what must be verified after the crimp?",
        "options": [
            {
                "text": "The crimp must be inspected for proper depth, the wire must not pull out, and the insulation grip must hold the insulation",
                "isCorrect": true
            },
            {
                "text": "The terminal should spin freely on the wire to allow flexibility",
                "isCorrect": false
            },
            {
                "text": "Solder must always be applied over the crimp for all aircraft terminals",
                "isCorrect": false
            },
            {
                "text": "Only a visual check is needed \u2014 pull testing is not required for crimped terminals",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 362
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Shielded Wire",
        "text": "What is the purpose of shielded wire in aircraft electrical systems?",
        "options": [
            {
                "text": "The metallic shield prevents electromagnetic interference (EMI) from affecting sensitive signals or radiating from the wire",
                "isCorrect": true
            },
            {
                "text": "The shield increases the current-carrying capacity of the wire by 50%",
                "isCorrect": false
            },
            {
                "text": "Shielded wire is only used for cosmetic purposes to hide wire color",
                "isCorrect": false
            },
            {
                "text": "The shield acts as a backup conductor if the main wire breaks",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 232
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Wiring Diagrams",
        "text": "What is the purpose of a wiring diagram in aircraft maintenance?",
        "options": [
            {
                "text": "It shows how components, wiring, connectors, and terminal boards are connected, used for troubleshooting and repair",
                "isCorrect": true
            },
            {
                "text": "It shows only the physical location of wires in the aircraft without connection details",
                "isCorrect": false
            },
            {
                "text": "It is a purchasing document that lists wire part numbers and costs",
                "isCorrect": false
            },
            {
                "text": "It shows the manufacturing process for building wire harnesses",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 425
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Digital Multimeter",
        "text": "A digital multimeter (DMM) is the most versatile instrument for aircraft technicians. What three basic measurements can it perform?",
        "options": [
            {
                "text": "Voltage (volts), current (amps), and resistance (ohms)",
                "isCorrect": true
            },
            {
                "text": "Temperature, pressure, and humidity",
                "isCorrect": false
            },
            {
                "text": "Torque, tension, and compression",
                "isCorrect": false
            },
            {
                "text": "Speed, distance, and time",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 342
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Oscilloscope",
        "text": "What does an oscilloscope display that a standard multimeter cannot?",
        "options": [
            {
                "text": "The shape (waveform) of an electrical signal over time, showing frequency, amplitude, and distortion",
                "isCorrect": true
            },
            {
                "text": "The resistance value of a component with higher precision",
                "isCorrect": false
            },
            {
                "text": "The temperature of electronic components during operation",
                "isCorrect": false
            },
            {
                "text": "The physical location of a wire fault inside a cable bundle",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 344
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Megohmmeter",
        "text": "What is a megohmmeter (megger) used for in aircraft maintenance?",
        "options": [
            {
                "text": "To measure very high resistance values, typically for testing wire insulation integrity",
                "isCorrect": true
            },
            {
                "text": "To measure very low resistance values in motor windings",
                "isCorrect": false
            },
            {
                "text": "To measure megawatts of power consumption in large systems",
                "isCorrect": false
            },
            {
                "text": "To generate high voltage for powering test circuits",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 341
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Soldering Iron",
        "text": "When soldering electronic connections on aircraft equipment, what type of solder is typically required?",
        "options": [
            {
                "text": "Rosin-core solder \u2014 acid-core solder must never be used on electronic connections because it causes corrosion",
                "isCorrect": true
            },
            {
                "text": "Acid-core solder for the strongest possible joint",
                "isCorrect": false
            },
            {
                "text": "Lead-free solder is prohibited on all aircraft electronics",
                "isCorrect": false
            },
            {
                "text": "Any household plumbing solder is acceptable for aircraft use",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 189
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Crimping Tools",
        "text": "Why must calibrated crimping tools be used when installing terminal lugs on aircraft wire?",
        "options": [
            {
                "text": "To ensure consistent, reliable crimps that meet specifications \u2014 improper crimps can cause high-resistance connections or wire pullout",
                "isCorrect": true
            },
            {
                "text": "Standard pliers provide the same quality crimp as a calibrated tool",
                "isCorrect": false
            },
            {
                "text": "Crimping tools are only required for wires larger than 4 AWG",
                "isCorrect": false
            },
            {
                "text": "The calibration only affects the appearance, not the strength of the crimp",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 361
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Clamp-On Ammeter",
        "text": "What advantage does a clamp-on ammeter provide over a standard inline ammeter?",
        "options": [
            {
                "text": "It can measure current without breaking the circuit \u2014 the clamp senses the magnetic field around the wire",
                "isCorrect": true
            },
            {
                "text": "It provides more accurate readings because it contacts the bare conductor",
                "isCorrect": false
            },
            {
                "text": "It can only measure DC current, not AC current",
                "isCorrect": false
            },
            {
                "text": "It must be permanently installed and cannot be removed",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 70
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Logic Probe",
        "text": "What is a logic probe used for in aircraft avionics troubleshooting?",
        "options": [
            {
                "text": "To quickly determine the logic state (high, low, or pulsing) at a point in a digital circuit",
                "isCorrect": true
            },
            {
                "text": "To measure the exact analog voltage at any point in a circuit",
                "isCorrect": false
            },
            {
                "text": "To test the physical strength of solder joints on circuit boards",
                "isCorrect": false
            },
            {
                "text": "To inject test signals into radio frequency circuits",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 181
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Safety Wire Pliers",
        "text": "What is the purpose of safety wire pliers in aircraft maintenance?",
        "options": [
            {
                "text": "To twist safety wire around fasteners to prevent them from loosening due to vibration",
                "isCorrect": true
            },
            {
                "text": "To cut high-voltage wires safely while the circuit is energized",
                "isCorrect": false
            },
            {
                "text": "To strip insulation from aircraft wiring without nicking the conductor",
                "isCorrect": false
            },
            {
                "text": "To crimp terminal lugs onto wire ends",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 261
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Bonding Tester",
        "text": "What does a bonding tester measure on an aircraft?",
        "options": [
            {
                "text": "The resistance of electrical bonds between aircraft components to ensure low-resistance paths for current flow and lightning protection",
                "isCorrect": true
            },
            {
                "text": "The adhesive strength of bonded composite panels",
                "isCorrect": false
            },
            {
                "text": "The chemical composition of bonding agents used in structural repairs",
                "isCorrect": false
            },
            {
                "text": "The temperature of bonded joints during heat curing",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 65
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Continuity Tester",
        "text": "A technician uses a continuity tester on a wire run and hears no tone. What does this indicate?",
        "options": [
            {
                "text": "The wire has an open circuit \u2014 there is no continuous path for current between the test points",
                "isCorrect": true
            },
            {
                "text": "The wire is in perfect condition with zero resistance",
                "isCorrect": false
            },
            {
                "text": "The circuit is energized and the tester cannot be used",
                "isCorrect": false
            },
            {
                "text": "The wire has a short circuit to ground",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 342
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Limiter Circuits",
        "topic": "Zener Diode",
        "text": "How does a Zener diode function differently from a standard rectifier diode?",
        "options": [
            {
                "text": "A Zener diode is designed to conduct in reverse bias at a specific breakdown voltage, used for voltage regulation",
                "isCorrect": true
            },
            {
                "text": "A Zener diode conducts current in both directions at all voltages",
                "isCorrect": false
            },
            {
                "text": "A Zener diode only works with AC and cannot be used in DC circuits",
                "isCorrect": false
            },
            {
                "text": "A Zener diode has no specific breakdown voltage and conducts randomly",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 117
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Limiter Circuits",
        "topic": "Clipper Circuit",
        "text": "What does a clipper (limiter) circuit do to an input signal?",
        "options": [
            {
                "text": "It removes (clips) the portion of the signal that exceeds a preset voltage level, limiting the output amplitude",
                "isCorrect": true
            },
            {
                "text": "It amplifies the entire signal equally across all voltage levels",
                "isCorrect": false
            },
            {
                "text": "It converts the signal from analog to digital format",
                "isCorrect": false
            },
            {
                "text": "It increases the frequency of the signal while maintaining amplitude",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 123
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Limiter Circuits",
        "topic": "Clamper Circuit",
        "text": "What is the purpose of a clamper circuit?",
        "options": [
            {
                "text": "It shifts the entire AC signal up or down by adding a DC offset without changing the waveform shape",
                "isCorrect": true
            },
            {
                "text": "It physically clamps wires together to prevent movement",
                "isCorrect": false
            },
            {
                "text": "It removes all AC components and outputs pure DC",
                "isCorrect": false
            },
            {
                "text": "It doubles the frequency of the input signal",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 345
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Limiter Circuits",
        "topic": "Diode Limiter",
        "text": "In a basic diode limiter circuit, a diode is used to prevent a signal from exceeding a certain voltage. How does the diode accomplish this?",
        "options": [
            {
                "text": "When the signal exceeds the diode's forward voltage threshold, the diode conducts and shunts the excess voltage to ground",
                "isCorrect": true
            },
            {
                "text": "The diode absorbs and stores the excess voltage in its internal capacitance",
                "isCorrect": false
            },
            {
                "text": "The diode reflects the excess voltage back to the source",
                "isCorrect": false
            },
            {
                "text": "The diode converts the excess voltage into light energy",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Limiter Circuits",
        "topic": "Voltage Protection",
        "text": "Why are limiter circuits important in aircraft avionics systems?",
        "options": [
            {
                "text": "They protect sensitive electronic components from voltage spikes and transients that could cause damage or malfunction",
                "isCorrect": true
            },
            {
                "text": "They increase the power output of transmitter circuits",
                "isCorrect": false
            },
            {
                "text": "They are only used for audio volume control in headsets",
                "isCorrect": false
            },
            {
                "text": "They prevent the aircraft battery from charging too quickly",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 264
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Ohm's Law - Find Current",
        "text": "A 12V battery powers a circuit with a total resistance of 6 ohms. How much current flows through the circuit?",
        "options": [
            {
                "text": "2 amps (I = E/R = 12/6 = 2A)",
                "isCorrect": true
            },
            {
                "text": "72 amps (I = E \u00d7 R)",
                "isCorrect": false
            },
            {
                "text": "0.5 amps (I = R/E)",
                "isCorrect": false
            },
            {
                "text": "18 amps (I = E + R)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 46
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Ohm's Law - Find Voltage",
        "text": "A circuit draws 3 amps through a 47-ohm resistor. What is the voltage drop across that resistor?",
        "options": [
            {
                "text": "141 volts (E = I \u00d7 R = 3 \u00d7 47 = 141V)",
                "isCorrect": true
            },
            {
                "text": "15.67 volts (E = R/I)",
                "isCorrect": false
            },
            {
                "text": "50 volts (E = I + R)",
                "isCorrect": false
            },
            {
                "text": "44 volts (E = R \u2212 I)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 44
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Ohm's Law - Find Resistance",
        "text": "An aircraft landing light operates at 28V and draws 4 amps. What is the resistance of the light?",
        "options": [
            {
                "text": "7 ohms (R = E/I = 28/4 = 7\u03a9)",
                "isCorrect": true
            },
            {
                "text": "112 ohms (R = E \u00d7 I)",
                "isCorrect": false
            },
            {
                "text": "32 ohms (R = E + I)",
                "isCorrect": false
            },
            {
                "text": "24 ohms (R = E \u2212 I)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 200
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Ohm's Law - Aircraft Bus",
        "text": "An aircraft 28V DC bus supplies a navigation light with a resistance of 14 ohms. What current does the light draw?",
        "options": [
            {
                "text": "2 amps (I = E/R = 28/14 = 2A)",
                "isCorrect": true
            },
            {
                "text": "392 amps (I = E \u00d7 R)",
                "isCorrect": false
            },
            {
                "text": "0.5 amps (I = R/E)",
                "isCorrect": false
            },
            {
                "text": "42 amps (I = E + R)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 41
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Ohm's Law - Unknown Voltage",
        "text": "A heater element has a resistance of 8 ohms and draws 3.5 amps. What voltage is applied to it?",
        "options": [
            {
                "text": "28 volts (E = I \u00d7 R = 3.5 \u00d7 8 = 28V)",
                "isCorrect": true
            },
            {
                "text": "2.29 volts (E = R/I)",
                "isCorrect": false
            },
            {
                "text": "11.5 volts (E = I + R)",
                "isCorrect": false
            },
            {
                "text": "4.5 volts (E = R \u2212 I)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 84
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Ohm's Law - Small Current",
        "text": "A sensor circuit applies 5V across a 10,000-ohm (10 k\u03a9) resistor. What current flows?",
        "options": [
            {
                "text": "0.5 milliamps (I = E/R = 5/10,000 = 0.0005A = 0.5 mA)",
                "isCorrect": true
            },
            {
                "text": "50,000 amps (I = E \u00d7 R)",
                "isCorrect": false
            },
            {
                "text": "2,000 amps (I = R/E)",
                "isCorrect": false
            },
            {
                "text": "5 amps (I = E/R with R = 1\u03a9)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 121
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Power - P=EI",
        "text": "An aircraft instrument draws 2 amps from the 28V bus. How much power does it consume?",
        "options": [
            {
                "text": "56 watts (P = E \u00d7 I = 28 \u00d7 2 = 56W)",
                "isCorrect": true
            },
            {
                "text": "14 watts (P = E/I)",
                "isCorrect": false
            },
            {
                "text": "30 watts (P = E + I)",
                "isCorrect": false
            },
            {
                "text": "784 watts (P = E\u00b2 \u00d7 I)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 200
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Power - P=I\u00b2R",
        "text": "A 50-ohm resistor carries 0.4 amps of current. How much power is it dissipating?",
        "options": [
            {
                "text": "8 watts (P = I\u00b2 \u00d7 R = 0.16 \u00d7 50 = 8W)",
                "isCorrect": true
            },
            {
                "text": "20 watts (P = I \u00d7 R)",
                "isCorrect": false
            },
            {
                "text": "125 watts (P = R/I\u00b2)",
                "isCorrect": false
            },
            {
                "text": "50.4 watts (P = R + I)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 84
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Power - P=E\u00b2/R",
        "text": "A 28V source is connected across a 196-ohm resistor. What power is dissipated?",
        "options": [
            {
                "text": "4 watts (P = E\u00b2/R = 784/196 = 4W)",
                "isCorrect": true
            },
            {
                "text": "5,488 watts (P = E\u00b2 \u00d7 R)",
                "isCorrect": false
            },
            {
                "text": "7 watts (P = E/R)",
                "isCorrect": false
            },
            {
                "text": "224 watts (P = E + R)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 44
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Power - Find Current from Power",
        "text": "A 28V aircraft circuit is protected by a 5-amp fuse. What is the maximum power the circuit can deliver before the fuse blows?",
        "options": [
            {
                "text": "140 watts (P = E \u00d7 I = 28 \u00d7 5 = 140W)",
                "isCorrect": true
            },
            {
                "text": "5.6 watts (P = E/I)",
                "isCorrect": false
            },
            {
                "text": "33 watts (P = E + I)",
                "isCorrect": false
            },
            {
                "text": "560 watts (P = E \u00d7 I \u00d7 4)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 41
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Power - Practical Application",
        "text": "An aircraft generator produces 28V and is rated at 60 amps. What is the maximum power output?",
        "options": [
            {
                "text": "1,680 watts (P = E \u00d7 I = 28 \u00d7 60 = 1,680W)",
                "isCorrect": true
            },
            {
                "text": "88 watts (P = E + I)",
                "isCorrect": false
            },
            {
                "text": "0.467 watts (P = E/I)",
                "isCorrect": false
            },
            {
                "text": "168 watts (P = E \u00d7 I / 10)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 186
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Series Resistance",
        "text": "Four resistors of 10\u03a9, 22\u03a9, 33\u03a9, and 47\u03a9 are connected in series. What is the total resistance?",
        "options": [
            {
                "text": "112\u03a9 (RT = 10 + 22 + 33 + 47 = 112\u03a9)",
                "isCorrect": true
            },
            {
                "text": "28\u03a9 (average of all four values)",
                "isCorrect": false
            },
            {
                "text": "5.15\u03a9 (parallel formula result)",
                "isCorrect": false
            },
            {
                "text": "47\u03a9 (largest value dominates)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 55
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Parallel Resistance - Equal",
        "text": "Three 30\u03a9 resistors are connected in parallel. What is the total resistance?",
        "options": [
            {
                "text": "10\u03a9 (for equal resistors in parallel: RT = R/N = 30/3 = 10\u03a9)",
                "isCorrect": true
            },
            {
                "text": "90\u03a9 (RT = R \u00d7 N)",
                "isCorrect": false
            },
            {
                "text": "30\u03a9 (parallel doesn't change resistance)",
                "isCorrect": false
            },
            {
                "text": "0.1\u03a9 (RT = N/R)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 57
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Parallel Resistance - Two",
        "text": "A 20\u03a9 resistor and a 30\u03a9 resistor are connected in parallel. What is the total resistance?",
        "options": [
            {
                "text": "12\u03a9 (RT = (R1\u00d7R2)/(R1+R2) = 600/50 = 12\u03a9)",
                "isCorrect": true
            },
            {
                "text": "50\u03a9 (RT = R1 + R2)",
                "isCorrect": false
            },
            {
                "text": "25\u03a9 (average of the two)",
                "isCorrect": false
            },
            {
                "text": "600\u03a9 (RT = R1 \u00d7 R2)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 55
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Series-Parallel Circuit",
        "text": "A 10\u03a9 resistor is in series with two 20\u03a9 resistors that are in parallel with each other. What is the total circuit resistance?",
        "options": [
            {
                "text": "20\u03a9 (parallel pair = 10\u03a9, plus series 10\u03a9 = 20\u03a9 total)",
                "isCorrect": true
            },
            {
                "text": "50\u03a9 (all three added together)",
                "isCorrect": false
            },
            {
                "text": "30\u03a9 (10 + 20 = 30)",
                "isCorrect": false
            },
            {
                "text": "6.67\u03a9 (all three in parallel)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 56
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Series Circuit - Total Current",
        "text": "A 28V source powers a series circuit with resistors of 4\u03a9, 6\u03a9, and 4\u03a9. What current flows through the circuit?",
        "options": [
            {
                "text": "2 amps (RT = 4+6+4 = 14\u03a9, then I = E/R = 28/14 = 2A)",
                "isCorrect": true
            },
            {
                "text": "6 amps (I = E/R using only the largest resistor)",
                "isCorrect": false
            },
            {
                "text": "7 amps (I = E/R using only one 4\u03a9 resistor)",
                "isCorrect": false
            },
            {
                "text": "392 amps (I = E \u00d7 R)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 44
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Inductive Reactance Calc",
        "text": "Calculate the inductive reactance of a 0.5 henry inductor at 60 Hz. (XL = 2\u03c0fL)",
        "options": [
            {
                "text": "188.5\u03a9 (XL = 2 \u00d7 3.14 \u00d7 60 \u00d7 0.5 = 188.5\u03a9)",
                "isCorrect": true
            },
            {
                "text": "30\u03a9 (XL = f \u00d7 L)",
                "isCorrect": false
            },
            {
                "text": "5.31\u03a9 (XL = 1/(2\u03c0fL))",
                "isCorrect": false
            },
            {
                "text": "60.5\u03a9 (XL = f + L)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 394
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Capacitive Reactance Calc",
        "text": "Calculate the capacitive reactance of a 10 microfarad (10 \u00d7 10\u207b\u2076 F) capacitor at 60 Hz. (XC = 1/(2\u03c0fC))",
        "options": [
            {
                "text": "Approximately 265\u03a9 (XC = 1/(2 \u00d7 3.14 \u00d7 60 \u00d7 0.00001) \u2248 265\u03a9)",
                "isCorrect": true
            },
            {
                "text": "0.00377\u03a9 (XC = 2\u03c0fC)",
                "isCorrect": false
            },
            {
                "text": "600\u03a9 (XC = f \u00d7 C)",
                "isCorrect": false
            },
            {
                "text": "3,770\u03a9 (XC = 2\u03c0f/C)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 89
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Impedance Calc",
        "text": "A series RL circuit has R = 30\u03a9 and XL = 40\u03a9. What is the total impedance (Z)?",
        "options": [
            {
                "text": "50\u03a9 (Z = \u221a(R\u00b2 + XL\u00b2) = \u221a(900 + 1600) = \u221a2500 = 50\u03a9)",
                "isCorrect": true
            },
            {
                "text": "70\u03a9 (Z = R + XL)",
                "isCorrect": false
            },
            {
                "text": "10\u03a9 (Z = XL \u2212 R)",
                "isCorrect": false
            },
            {
                "text": "1,200\u03a9 (Z = R \u00d7 XL)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 57
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Resonant Frequency",
        "text": "At resonance in a series RLC circuit, what is the relationship between inductive reactance (XL) and capacitive reactance (XC)?",
        "options": [
            {
                "text": "They are equal (XL = XC), and they cancel each other out, leaving only resistance",
                "isCorrect": true
            },
            {
                "text": "XL is always double XC at resonance",
                "isCorrect": false
            },
            {
                "text": "XC drops to zero while XL reaches maximum",
                "isCorrect": false
            },
            {
                "text": "Both XL and XC become infinite at resonance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 62
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Turns Ratio Voltage",
        "text": "A transformer has a turns ratio of 4:1 (step-down). If 120V AC is applied to the primary, what is the secondary voltage?",
        "options": [
            {
                "text": "30V AC (Vs = Vp/turns ratio = 120/4 = 30V)",
                "isCorrect": true
            },
            {
                "text": "480V AC (Vs = Vp \u00d7 turns ratio)",
                "isCorrect": false
            },
            {
                "text": "120V AC (voltage doesn't change)",
                "isCorrect": false
            },
            {
                "text": "116V AC (Vs = Vp \u2212 turns ratio)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 105
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Turns Ratio Current",
        "text": "A step-down transformer with a 5:1 ratio has 2 amps flowing in the primary. What current is available at the secondary?",
        "options": [
            {
                "text": "10 amps (Is = Ip \u00d7 turns ratio = 2 \u00d7 5 = 10A \u2014 current steps up when voltage steps down)",
                "isCorrect": true
            },
            {
                "text": "0.4 amps (Is = Ip / turns ratio)",
                "isCorrect": false
            },
            {
                "text": "2 amps (current is the same on both sides)",
                "isCorrect": false
            },
            {
                "text": "7 amps (Is = Ip + turns ratio)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 103
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Transformer Turns",
        "text": "A transformer must step 115V AC down to 28V AC. If the primary has 460 turns, how many turns must the secondary have?",
        "options": [
            {
                "text": "112 turns (Ns = Np \u00d7 Vs/Vp = 460 \u00d7 28/115 = 112 turns)",
                "isCorrect": true
            },
            {
                "text": "1,893 turns (Ns = Np \u00d7 Vp/Vs)",
                "isCorrect": false
            },
            {
                "text": "460 turns (same as primary)",
                "isCorrect": false
            },
            {
                "text": "28 turns (same as output voltage)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 103
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic circuit Calculations",
        "topic": "Transformer Power",
        "text": "An ideal transformer has 120V at 5A on the primary. If the secondary voltage is 24V, what is the maximum secondary current?",
        "options": [
            {
                "text": "25 amps (Power in = Power out: 120\u00d75 = 600W, so Is = 600/24 = 25A)",
                "isCorrect": true
            },
            {
                "text": "5 amps (current stays the same)",
                "isCorrect": false
            },
            {
                "text": "1 amp (Is = Vs/Vp)",
                "isCorrect": false
            },
            {
                "text": "600 amps (Is = Pin/1)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 186
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transistor Amplifier Circuits",
        "topic": "NPN vs PNP",
        "text": "What is the fundamental difference between an NPN and a PNP transistor?",
        "options": [
            {
                "text": "In an NPN, current flows from collector to emitter when base is positive; in a PNP, current flows from emitter to collector when base is negative",
                "isCorrect": true
            },
            {
                "text": "NPN transistors amplify voltage while PNP transistors amplify current",
                "isCorrect": false
            },
            {
                "text": "NPN transistors are used in AC circuits and PNP in DC circuits only",
                "isCorrect": false
            },
            {
                "text": "There is no functional difference \u2014 the labels are interchangeable",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 131
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transistor Amplifier Circuits",
        "topic": "Three Terminals",
        "text": "A bipolar junction transistor (BJT) has three terminals. What are they, and which controls the current flow?",
        "options": [
            {
                "text": "Base, collector, and emitter \u2014 a small current at the base controls a larger current between collector and emitter",
                "isCorrect": true
            },
            {
                "text": "Anode, cathode, and gate \u2014 the gate controls current like a valve",
                "isCorrect": false
            },
            {
                "text": "Source, drain, and ground \u2014 the ground terminal controls current flow",
                "isCorrect": false
            },
            {
                "text": "Input, output, and reference \u2014 the reference terminal sets the gain",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 129
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transistor Amplifier Circuits",
        "topic": "Common Emitter",
        "text": "Which transistor amplifier configuration provides both voltage gain and current gain, and is the most commonly used?",
        "options": [
            {
                "text": "Common emitter \u2014 it provides both voltage and current amplification with a 180\u00b0 phase inversion",
                "isCorrect": true
            },
            {
                "text": "Common base \u2014 it provides the highest voltage gain with no current gain",
                "isCorrect": false
            },
            {
                "text": "Common collector \u2014 it provides the highest power gain with no voltage gain",
                "isCorrect": false
            },
            {
                "text": "Common ground \u2014 it provides unity gain in all configurations",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 407
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transistor Amplifier Circuits",
        "topic": "Amplifier Classes",
        "text": "A Class A amplifier conducts during what portion of the input signal cycle?",
        "options": [
            {
                "text": "The full 360 degrees of the input cycle \u2014 it conducts continuously with low distortion but lower efficiency",
                "isCorrect": true
            },
            {
                "text": "Only 180 degrees (half) of the input cycle",
                "isCorrect": false
            },
            {
                "text": "Less than 180 degrees of the input cycle for maximum efficiency",
                "isCorrect": false
            },
            {
                "text": "Only during signal peaks above a threshold voltage",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 408
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transistor Amplifier Circuits",
        "topic": "Class B Amplifier",
        "text": "A push-pull amplifier uses two transistors in a Class B configuration. Why are two transistors needed?",
        "options": [
            {
                "text": "Each transistor amplifies one half of the AC cycle (180\u00b0), and together they reproduce the full waveform",
                "isCorrect": true
            },
            {
                "text": "Two transistors are used for redundancy in case one fails",
                "isCorrect": false
            },
            {
                "text": "Both transistors conduct simultaneously to double the output power",
                "isCorrect": false
            },
            {
                "text": "One transistor handles voltage gain while the other handles current gain",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 137
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transistor Amplifier Circuits",
        "topic": "Biasing",
        "text": "What is the purpose of biasing a transistor in an amplifier circuit?",
        "options": [
            {
                "text": "To set the proper DC operating point so the transistor can amplify AC signals without distortion",
                "isCorrect": true
            },
            {
                "text": "To prevent the transistor from ever turning on during normal operation",
                "isCorrect": false
            },
            {
                "text": "To convert the transistor from NPN to PNP operation mode",
                "isCorrect": false
            },
            {
                "text": "To reduce the transistor's gain to zero for testing purposes",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 133
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transistor Amplifier Circuits",
        "topic": "Gain",
        "text": "An amplifier has an input signal of 0.1V and produces an output signal of 5V. What is the voltage gain?",
        "options": [
            {
                "text": "50 (Gain = Vout/Vin = 5/0.1 = 50)",
                "isCorrect": true
            },
            {
                "text": "4.9 (Gain = Vout \u2212 Vin)",
                "isCorrect": false
            },
            {
                "text": "0.5 (Gain = Vout \u00d7 Vin)",
                "isCorrect": false
            },
            {
                "text": "0.02 (Gain = Vin/Vout)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 146
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transistor Amplifier Circuits",
        "topic": "FET Transistor",
        "text": "How does a field-effect transistor (FET) differ from a bipolar junction transistor (BJT)?",
        "options": [
            {
                "text": "A FET is voltage-controlled (gate voltage controls drain current) while a BJT is current-controlled (base current controls collector current)",
                "isCorrect": true
            },
            {
                "text": "A FET can only amplify DC signals while a BJT amplifies AC and DC",
                "isCorrect": false
            },
            {
                "text": "A FET has only two terminals while a BJT has three",
                "isCorrect": false
            },
            {
                "text": "FETs are analog devices while BJTs are digital devices",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 134
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Logic / Theory of Operation",
        "topic": "AND Gate",
        "text": "A two-input AND gate has input A = 1 and input B = 0. What is the output?",
        "options": [
            {
                "text": "0 \u2014 an AND gate outputs 1 only when ALL inputs are 1",
                "isCorrect": true
            },
            {
                "text": "1 \u2014 an AND gate outputs 1 when ANY input is 1",
                "isCorrect": false
            },
            {
                "text": "The output alternates between 0 and 1",
                "isCorrect": false
            },
            {
                "text": "The output is undefined when inputs differ",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 217
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Logic / Theory of Operation",
        "topic": "OR Gate",
        "text": "A two-input OR gate has input A = 0 and input B = 1. What is the output?",
        "options": [
            {
                "text": "1 \u2014 an OR gate outputs 1 when ANY input is 1",
                "isCorrect": true
            },
            {
                "text": "0 \u2014 an OR gate outputs 1 only when ALL inputs are 1",
                "isCorrect": false
            },
            {
                "text": "0 \u2014 an OR gate outputs 1 only when all inputs are 0",
                "isCorrect": false
            },
            {
                "text": "The output depends on which input was activated first",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 217
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Logic / Theory of Operation",
        "topic": "NOT Gate",
        "text": "What does a NOT gate (inverter) do to its input?",
        "options": [
            {
                "text": "It reverses the logic state \u2014 a 1 input produces a 0 output, and a 0 input produces a 1 output",
                "isCorrect": true
            },
            {
                "text": "It doubles the input signal voltage",
                "isCorrect": false
            },
            {
                "text": "It passes the input through unchanged with a time delay",
                "isCorrect": false
            },
            {
                "text": "It converts a digital signal to an analog signal",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 220
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Logic / Theory of Operation",
        "topic": "NAND Gate",
        "text": "A NAND gate is equivalent to which combination of basic gates?",
        "options": [
            {
                "text": "An AND gate followed by a NOT gate \u2014 it outputs 0 only when ALL inputs are 1",
                "isCorrect": true
            },
            {
                "text": "An OR gate followed by a NOT gate",
                "isCorrect": false
            },
            {
                "text": "Two NOT gates connected in series",
                "isCorrect": false
            },
            {
                "text": "A NOT gate followed by an AND gate",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 218
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Logic / Theory of Operation",
        "topic": "Logic Levels",
        "text": "In standard TTL (transistor-transistor logic) digital circuits, what voltage range represents a logic HIGH (1)?",
        "options": [
            {
                "text": "Approximately 2.4V to 5V",
                "isCorrect": true
            },
            {
                "text": "Exactly 1.0V and nothing else",
                "isCorrect": false
            },
            {
                "text": "Any negative voltage below 0V",
                "isCorrect": false
            },
            {
                "text": "Approximately 10V to 15V",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 151
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Logic / Theory of Operation",
        "topic": "Flip-Flop",
        "text": "What is the basic function of a flip-flop in a digital circuit?",
        "options": [
            {
                "text": "It stores one bit of data \u2014 it can be set to either a 0 or 1 and holds that state until changed",
                "isCorrect": true
            },
            {
                "text": "It amplifies digital signals to increase their voltage level",
                "isCorrect": false
            },
            {
                "text": "It converts analog signals to digital format",
                "isCorrect": false
            },
            {
                "text": "It generates a clock signal for timing other circuits",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 217
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Logic / Theory of Operation",
        "topic": "Truth Table",
        "text": "A truth table shows: inputs 0,0\u21920; 0,1\u21921; 1,0\u21921; 1,1\u21920. Which gate does this represent?",
        "options": [
            {
                "text": "An XOR (exclusive OR) gate \u2014 it outputs 1 only when the inputs are different",
                "isCorrect": true
            },
            {
                "text": "An AND gate \u2014 it outputs 1 only when both inputs are 1",
                "isCorrect": false
            },
            {
                "text": "A NOR gate \u2014 it outputs 1 only when both inputs are 0",
                "isCorrect": false
            },
            {
                "text": "An OR gate \u2014 it outputs 1 when any input is 1",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 217
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Connector Maintenance",
        "topic": "Pin Inspection",
        "text": "When inspecting an aircraft electrical connector, what is a technician looking for on the pins and sockets?",
        "options": [
            {
                "text": "Bent, broken, corroded, or recessed pins/sockets, and contamination from dirt, moisture, or foreign debris",
                "isCorrect": true
            },
            {
                "text": "Only the color of the pins to verify they match the wiring diagram",
                "isCorrect": false
            },
            {
                "text": "The serial number stamped on each individual pin",
                "isCorrect": false
            },
            {
                "text": "Whether the pins are magnetic, which indicates a defective connector",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 330
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Connector Maintenance",
        "topic": "Moisture Prevention",
        "text": "Why is moisture intrusion a serious concern for aircraft electrical connectors?",
        "options": [
            {
                "text": "Moisture causes corrosion on pins, creates unwanted current paths, and can lead to intermittent faults or short circuits",
                "isCorrect": true
            },
            {
                "text": "Moisture only affects the appearance of the connector shell",
                "isCorrect": false
            },
            {
                "text": "Moisture improves electrical conductivity and is sometimes added intentionally",
                "isCorrect": false
            },
            {
                "text": "Moisture only affects connectors made of aluminum, not other materials",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 342
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Connector Maintenance",
        "topic": "Insertion/Removal Tools",
        "text": "Why must specific insertion and removal tools be used when working with connector pins?",
        "options": [
            {
                "text": "To prevent damage to the pin, socket, or connector body \u2014 using incorrect tools can bend pins or crack the insert",
                "isCorrect": true
            },
            {
                "text": "Any small screwdriver or pick can be used as a substitute",
                "isCorrect": false
            },
            {
                "text": "The tools are only needed for connectors with more than 100 pins",
                "isCorrect": false
            },
            {
                "text": "Insertion tools are optional and only used to speed up the process",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 361
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Connector Maintenance",
        "topic": "Potting and Sealing",
        "text": "What is the purpose of potting compound applied to the back of an aircraft connector?",
        "options": [
            {
                "text": "It provides environmental sealing, strain relief, and prevents moisture from wicking along the wires into the connector",
                "isCorrect": true
            },
            {
                "text": "It increases the electrical conductivity between the pins and wires",
                "isCorrect": false
            },
            {
                "text": "It makes the connector easier to disconnect during maintenance",
                "isCorrect": false
            },
            {
                "text": "It changes the color of the connector for identification purposes",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 232
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Connector Maintenance",
        "topic": "Mating Connectors",
        "text": "When mating (connecting) two halves of an aircraft connector, what must a technician ensure?",
        "options": [
            {
                "text": "Proper alignment using the keyway or index key, and that the coupling ring is fully tightened to maintain environmental seal",
                "isCorrect": true
            },
            {
                "text": "Apply maximum force to push the connectors together regardless of alignment",
                "isCorrect": false
            },
            {
                "text": "Use lubricant on the pins to reduce insertion force",
                "isCorrect": false
            },
            {
                "text": "Leave the coupling ring loose to allow for thermal expansion",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 272
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Analog Circuits, Devices, and Switches",
        "topic": "SPST Switch",
        "text": "What does SPST stand for in switch terminology, and how does it function?",
        "options": [
            {
                "text": "Single Pole Single Throw \u2014 it has one input and one output, functioning as a simple on/off switch",
                "isCorrect": true
            },
            {
                "text": "Single Phase Single Terminal \u2014 it operates on single-phase AC power only",
                "isCorrect": false
            },
            {
                "text": "Standard Power Safety Toggle \u2014 it is a safety-rated toggle switch",
                "isCorrect": false
            },
            {
                "text": "Solid-state Power Switching Transistor \u2014 it is an electronic switch",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 190
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Analog Circuits, Devices, and Switches",
        "topic": "DPDT Switch",
        "text": "A DPDT (Double Pole Double Throw) switch is commonly used in aircraft to:",
        "options": [
            {
                "text": "Control two separate circuits simultaneously, each with two selectable positions",
                "isCorrect": true
            },
            {
                "text": "Provide double the current capacity of a standard switch",
                "isCorrect": false
            },
            {
                "text": "Switch between DC and AC power sources",
                "isCorrect": false
            },
            {
                "text": "Control only one circuit with a momentary contact action",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 193
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Analog Circuits, Devices, and Switches",
        "topic": "Relay",
        "text": "How does an electromechanical relay operate in an aircraft electrical system?",
        "options": [
            {
                "text": "A small control current energizes a coil that creates a magnetic field, pulling contacts closed to switch a larger current circuit",
                "isCorrect": true
            },
            {
                "text": "A relay converts DC to AC using a rotating armature",
                "isCorrect": false
            },
            {
                "text": "Relays work by heating a bimetallic strip that bends to make contact",
                "isCorrect": false
            },
            {
                "text": "A relay amplifies the input voltage by a fixed ratio like a transformer",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 415
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Analog Circuits, Devices, and Switches",
        "topic": "Potentiometer",
        "text": "What is a potentiometer and how is it used in aircraft circuits?",
        "options": [
            {
                "text": "A three-terminal variable resistor used to adjust voltage levels, such as dimming cockpit lighting",
                "isCorrect": true
            },
            {
                "text": "A device that measures electrical potential energy stored in capacitors",
                "isCorrect": false
            },
            {
                "text": "A fixed resistor used only in high-power motor circuits",
                "isCorrect": false
            },
            {
                "text": "A type of circuit breaker that limits current to a preset value",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 342
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Analog Circuits, Devices, and Switches",
        "topic": "Circuit Breaker vs Fuse",
        "text": "What is the key advantage of a circuit breaker over a fuse in aircraft electrical systems?",
        "options": [
            {
                "text": "A circuit breaker can be reset after it trips, while a fuse must be physically replaced after it blows",
                "isCorrect": true
            },
            {
                "text": "A circuit breaker is cheaper to manufacture than a fuse",
                "isCorrect": false
            },
            {
                "text": "Circuit breakers respond faster than fuses to overcurrent conditions",
                "isCorrect": false
            },
            {
                "text": "Fuses provide better protection because they are more sensitive",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 341
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC Basic Terms",
        "topic": "Voltage Definition",
        "text": "What is voltage (electromotive force) in a DC circuit?",
        "options": [
            {
                "text": "The electrical pressure or potential difference that causes current to flow through a circuit, measured in volts",
                "isCorrect": true
            },
            {
                "text": "The rate at which electrons pass a given point, measured in amps",
                "isCorrect": false
            },
            {
                "text": "The opposition to current flow in a conductor, measured in ohms",
                "isCorrect": false
            },
            {
                "text": "The total energy consumed by a load, measured in watts",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 29
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC Basic Terms",
        "topic": "Current Flow",
        "text": "In conventional current flow theory, which direction does current flow in a DC circuit?",
        "options": [
            {
                "text": "From the positive terminal of the source, through the circuit, and back to the negative terminal",
                "isCorrect": true
            },
            {
                "text": "From the negative terminal to the positive terminal (electron flow direction)",
                "isCorrect": false
            },
            {
                "text": "Current flows in both directions simultaneously in DC circuits",
                "isCorrect": false
            },
            {
                "text": "Current flow direction changes 60 times per second in DC circuits",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC Basic Terms",
        "topic": "Conductors vs Insulators",
        "text": "What makes copper an excellent conductor of electricity compared to rubber?",
        "options": [
            {
                "text": "Copper has loosely bound outer electrons that move freely, allowing easy current flow; rubber's electrons are tightly bound and resist movement",
                "isCorrect": true
            },
            {
                "text": "Copper is heavier than rubber, and heavier materials always conduct better",
                "isCorrect": false
            },
            {
                "text": "Copper is a metal and all metals are perfect conductors with zero resistance",
                "isCorrect": false
            },
            {
                "text": "Rubber conducts DC but not AC, while copper conducts both equally",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 26
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC Basic Terms",
        "topic": "Series vs Parallel",
        "text": "If one lamp burns out in a series circuit of four lamps, what happens to the remaining lamps?",
        "options": [
            {
                "text": "All remaining lamps go out because the circuit is broken \u2014 series circuits have only one path for current",
                "isCorrect": true
            },
            {
                "text": "The remaining lamps get brighter because they receive more voltage",
                "isCorrect": false
            },
            {
                "text": "Only the lamp next to the burned-out one goes out",
                "isCorrect": false
            },
            {
                "text": "Nothing changes \u2014 each lamp operates independently in a series circuit",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 42
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "DC Basic Terms",
        "topic": "Coulomb",
        "text": "What is a coulomb in electrical terms?",
        "options": [
            {
                "text": "A unit of electrical charge equal to approximately 6.24 \u00d7 10\u00b9\u2078 electrons \u2014 one amp equals one coulomb per second",
                "isCorrect": true
            },
            {
                "text": "A unit of resistance equal to one ohm per meter of wire",
                "isCorrect": false
            },
            {
                "text": "A unit of power equal to one watt per hour",
                "isCorrect": false
            },
            {
                "text": "A unit of voltage equal to one joule per electron",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 28
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "AC Basic Terms",
        "topic": "AC vs DC",
        "text": "What is the fundamental difference between AC and DC electricity?",
        "options": [
            {
                "text": "AC periodically reverses direction (alternates), while DC flows in one constant direction",
                "isCorrect": true
            },
            {
                "text": "AC is used only in low-voltage circuits, while DC is used only in high-voltage circuits",
                "isCorrect": false
            },
            {
                "text": "AC cannot be measured with a voltmeter, while DC can",
                "isCorrect": false
            },
            {
                "text": "DC alternates at 60 Hz while AC maintains a steady voltage",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 61
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "AC Basic Terms",
        "topic": "Frequency",
        "text": "Standard aircraft AC power systems in the United States operate at what frequency?",
        "options": [
            {
                "text": "400 Hz \u2014 aircraft use higher frequency than commercial power (60 Hz) to allow lighter, smaller transformers and motors",
                "isCorrect": true
            },
            {
                "text": "60 Hz \u2014 the same as standard household power",
                "isCorrect": false
            },
            {
                "text": "50 Hz \u2014 the international aviation standard",
                "isCorrect": false
            },
            {
                "text": "1,000 Hz \u2014 to minimize electrical noise in avionics",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 71
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "AC Basic Terms",
        "topic": "RMS vs Peak",
        "text": "What does RMS (Root Mean Square) mean when measuring AC voltage?",
        "options": [
            {
                "text": "The effective value of AC voltage that produces the same heating effect as an equivalent DC voltage \u2014 it equals 0.707 \u00d7 peak voltage",
                "isCorrect": true
            },
            {
                "text": "The maximum (peak) voltage reached during the AC cycle",
                "isCorrect": false
            },
            {
                "text": "The average of the positive and negative peak voltages",
                "isCorrect": false
            },
            {
                "text": "The voltage measured only during the positive half of the AC cycle",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 75
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "AC Basic Terms",
        "topic": "Phase",
        "text": "In a three-phase AC power system, what is the phase relationship between each of the three voltages?",
        "options": [
            {
                "text": "Each phase is separated by 120 degrees, providing smoother and more efficient power delivery",
                "isCorrect": true
            },
            {
                "text": "Each phase is separated by 90 degrees for maximum efficiency",
                "isCorrect": false
            },
            {
                "text": "All three phases are in sync (0 degrees apart) to triple the voltage",
                "isCorrect": false
            },
            {
                "text": "Each phase is separated by 180 degrees, creating opposing currents",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 66
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "AC Basic Terms",
        "topic": "Wavelength and Period",
        "text": "If an AC signal has a frequency of 400 Hz, what is its period (time for one complete cycle)?",
        "options": [
            {
                "text": "2.5 milliseconds (Period = 1/frequency = 1/400 = 0.0025 seconds)",
                "isCorrect": true
            },
            {
                "text": "400 milliseconds (Period = frequency)",
                "isCorrect": false
            },
            {
                "text": "0.4 seconds (Period = frequency/1000)",
                "isCorrect": false
            },
            {
                "text": "25 milliseconds (Period = 10/frequency)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 71
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Fault Isolation",
        "topic": "Open Resistor",
        "text": "A technician measures infinite resistance across a resistor that should read 1 k\u03a9. What does this indicate?",
        "options": [
            {
                "text": "The resistor has an open fault \u2014 the internal element has broken and no current can flow through it",
                "isCorrect": true
            },
            {
                "text": "The resistor is functioning normally at its rated value",
                "isCorrect": false
            },
            {
                "text": "The resistor is shorted and needs immediate replacement",
                "isCorrect": false
            },
            {
                "text": "The multimeter is set to the wrong range and needs recalibration",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 341
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Fault Isolation",
        "topic": "Shorted Resistor",
        "text": "A 470\u03a9 resistor measures 0 ohms (or near zero) on an ohmmeter. What fault has occurred?",
        "options": [
            {
                "text": "The resistor is shorted \u2014 it has a low-resistance path that bypasses the resistive element, allowing excessive current flow",
                "isCorrect": true
            },
            {
                "text": "The resistor has drifted to a higher value due to age",
                "isCorrect": false
            },
            {
                "text": "The resistor is open-circuited and must be replaced with a fuse",
                "isCorrect": false
            },
            {
                "text": "This is a normal reading for a 470\u03a9 resistor under load",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 352
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Fault Isolation",
        "topic": "Drift",
        "text": "A 100\u03a9 resistor measures 118\u03a9. What is the most likely cause?",
        "options": [
            {
                "text": "The resistor has drifted out of tolerance, likely due to overheating, aging, or exceeding its power rating over time",
                "isCorrect": true
            },
            {
                "text": "The resistor is shorted and should read 0\u03a9",
                "isCorrect": false
            },
            {
                "text": "The measurement is normal \u2014 all resistors read 18% higher than their rated value",
                "isCorrect": false
            },
            {
                "text": "The ohmmeter battery is dead and producing false readings",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 199
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Fault Isolation",
        "topic": "In-Circuit Measurement",
        "text": "Why should you disconnect power and isolate a resistor from the circuit before measuring its resistance?",
        "options": [
            {
                "text": "Parallel paths through other components give false readings, and applied voltage can damage the ohmmeter",
                "isCorrect": true
            },
            {
                "text": "Resistors change their value when the circuit is powered on",
                "isCorrect": false
            },
            {
                "text": "The ohmmeter requires the circuit to be powered to get an accurate reading",
                "isCorrect": false
            },
            {
                "text": "It is acceptable to measure resistance with the circuit powered \u2014 isolation is optional",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 342
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Resistor / Fault Isolation",
        "topic": "Visual Inspection",
        "text": "During a visual inspection, a resistor shows dark burn marks and a cracked body. What does this indicate?",
        "options": [
            {
                "text": "The resistor has been subjected to excessive power dissipation (overheating) and should be replaced and the root cause investigated",
                "isCorrect": true
            },
            {
                "text": "Burn marks are a normal part of resistor break-in and indicate proper operation",
                "isCorrect": false
            },
            {
                "text": "The resistor only needs to be cleaned and reinstalled",
                "isCorrect": false
            },
            {
                "text": "The discoloration means the resistor has shifted to a lower resistance value but is still safe to use",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 264
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Fault Isolation",
        "topic": "Open Capacitor",
        "text": "How would an open capacitor affect a power supply filter circuit?",
        "options": [
            {
                "text": "The DC output would have excessive AC ripple because the capacitor can no longer smooth the rectified waveform",
                "isCorrect": true
            },
            {
                "text": "The circuit would draw zero current and shut down completely",
                "isCorrect": false
            },
            {
                "text": "The output voltage would increase to dangerous levels",
                "isCorrect": false
            },
            {
                "text": "An open capacitor has no effect on circuit operation",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Fault Isolation",
        "topic": "Shorted Capacitor",
        "text": "What happens in a circuit when a capacitor develops an internal short?",
        "options": [
            {
                "text": "It creates a low-resistance path that can blow fuses, damage components, and cause excessive current draw",
                "isCorrect": true
            },
            {
                "text": "The circuit voltage increases because the capacitor releases all its stored energy",
                "isCorrect": false
            },
            {
                "text": "A shorted capacitor acts as an open circuit and stops current flow",
                "isCorrect": false
            },
            {
                "text": "The capacitor simply stops storing charge but the circuit operates normally",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 341
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Fault Isolation",
        "topic": "Leaky Capacitor",
        "text": "What is a 'leaky' capacitor?",
        "options": [
            {
                "text": "A capacitor whose dielectric has partially degraded, allowing a small DC current to pass through when it should block DC completely",
                "isCorrect": true
            },
            {
                "text": "A capacitor that is physically leaking electrolyte fluid from its casing",
                "isCorrect": false
            },
            {
                "text": "A capacitor that has zero capacitance and acts like an open wire",
                "isCorrect": false
            },
            {
                "text": "A capacitor that only works at frequencies above 1 MHz",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 82
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Fault Isolation",
        "topic": "Electrolytic Polarity",
        "text": "What can happen if an electrolytic capacitor is installed with reversed polarity?",
        "options": [
            {
                "text": "The capacitor can overheat, swell, vent gas, or even explode due to internal chemical breakdown of the dielectric",
                "isCorrect": true
            },
            {
                "text": "The capacitor simply works in reverse but functions normally",
                "isCorrect": false
            },
            {
                "text": "Reversed polarity doubles the capacitance value",
                "isCorrect": false
            },
            {
                "text": "Nothing happens \u2014 electrolytic capacitors are not polarity-sensitive",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 184
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Capacitor / Fault Isolation",
        "topic": "Capacitor Safety",
        "text": "Before testing or handling a large capacitor that has been removed from a circuit, what must a technician do first?",
        "options": [
            {
                "text": "Safely discharge the capacitor through an appropriate resistor \u2014 capacitors can store a lethal charge long after power is removed",
                "isCorrect": true
            },
            {
                "text": "Immediately short the terminals together with a screwdriver to discharge it quickly",
                "isCorrect": false
            },
            {
                "text": "No precautions are needed \u2014 capacitors discharge instantly when power is removed",
                "isCorrect": false
            },
            {
                "text": "Submerge the capacitor in water to safely neutralize the stored charge",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 181
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Numbering Systems",
        "topic": "Binary Basics",
        "text": "What is the binary (base-2) representation of the decimal number 13?",
        "options": [
            {
                "text": "1101 (8+4+0+1 = 13)",
                "isCorrect": true
            },
            {
                "text": "1011 (that equals 11 in decimal)",
                "isCorrect": false
            },
            {
                "text": "1110 (that equals 14 in decimal)",
                "isCorrect": false
            },
            {
                "text": "10011 (that equals 19 in decimal)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 205
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Numbering Systems",
        "topic": "Binary to Decimal",
        "text": "What is the decimal value of the binary number 10110?",
        "options": [
            {
                "text": "22 (16+0+4+2+0 = 22)",
                "isCorrect": true
            },
            {
                "text": "10110 (reading binary as decimal)",
                "isCorrect": false
            },
            {
                "text": "26 (incorrect positional addition)",
                "isCorrect": false
            },
            {
                "text": "18 (omitting the 4's place value)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 205
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Numbering Systems",
        "topic": "Hexadecimal",
        "text": "In hexadecimal (base-16), what decimal value does the letter 'A' represent?",
        "options": [
            {
                "text": "10 \u2014 hex uses A=10, B=11, C=12, D=13, E=14, F=15 for values above 9",
                "isCorrect": true
            },
            {
                "text": "1 \u2014 A is the first letter so it equals 1",
                "isCorrect": false
            },
            {
                "text": "16 \u2014 A represents the base value of hexadecimal",
                "isCorrect": false
            },
            {
                "text": "65 \u2014 A equals its ASCII code value",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 210
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Numbering Systems",
        "topic": "Octal",
        "text": "What is the decimal equivalent of the octal (base-8) number 17?",
        "options": [
            {
                "text": "15 (1\u00d78 + 7\u00d71 = 8+7 = 15)",
                "isCorrect": true
            },
            {
                "text": "17 (octal and decimal are the same)",
                "isCorrect": false
            },
            {
                "text": "78 (1\u00d77 + 8 = 78)",
                "isCorrect": false
            },
            {
                "text": "23 (1\u00d716 + 7 = 23)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 209
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Digital Numbering Systems",
        "topic": "Why Binary",
        "text": "Why do digital electronic systems use the binary numbering system?",
        "options": [
            {
                "text": "Electronic circuits can reliably represent two states \u2014 ON (1) and OFF (0) \u2014 using voltage levels, making binary the natural choice",
                "isCorrect": true
            },
            {
                "text": "Binary was chosen arbitrarily by early engineers and has no technical advantage",
                "isCorrect": false
            },
            {
                "text": "Binary allows circuits to process 10 different voltage levels simultaneously",
                "isCorrect": false
            },
            {
                "text": "Binary is only used in older systems \u2014 modern digital circuits use decimal",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 217
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazards-Safety Practices",
        "topic": "Electrical Shock",
        "text": "What is the most dangerous path for electrical current to travel through the human body?",
        "options": [
            {
                "text": "From one hand to the other, passing through the heart \u2014 even small currents (as low as 100 mA) across the chest can be fatal",
                "isCorrect": true
            },
            {
                "text": "From one foot to the other, which causes the most severe burns",
                "isCorrect": false
            },
            {
                "text": "From the head to the feet, which only causes temporary numbness",
                "isCorrect": false
            },
            {
                "text": "Electrical shock is only dangerous above 1,000 volts regardless of the path",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 259
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazards-Safety Practices",
        "topic": "Lockout/Tagout",
        "text": "What is the purpose of a lockout/tagout (LOTO) procedure?",
        "options": [
            {
                "text": "To ensure that equipment is de-energized and cannot be accidentally started while maintenance is being performed",
                "isCorrect": true
            },
            {
                "text": "To label equipment that has passed its annual safety inspection",
                "isCorrect": false
            },
            {
                "text": "To track which technician last used a piece of equipment",
                "isCorrect": false
            },
            {
                "text": "To reserve equipment for a specific maintenance task on a future date",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 267
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazards-Safety Practices",
        "topic": "Fire Extinguisher Classes",
        "text": "Which class of fire extinguisher should be used on an electrical fire?",
        "options": [
            {
                "text": "Class C \u2014 designed for energized electrical equipment; CO\u2082 and dry chemical types are common choices",
                "isCorrect": true
            },
            {
                "text": "Class A \u2014 designed for ordinary combustibles like wood and paper",
                "isCorrect": false
            },
            {
                "text": "Class B \u2014 designed for flammable liquids like fuel and oil",
                "isCorrect": false
            },
            {
                "text": "Class D \u2014 designed for combustible metals like magnesium",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 268
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazards-Safety Practices",
        "topic": "PPE",
        "text": "When working on aircraft electrical systems, what is the minimum PPE (Personal Protective Equipment) typically required?",
        "options": [
            {
                "text": "Safety glasses, insulated tools, and appropriate gloves \u2014 additional PPE may be required based on the specific hazard",
                "isCorrect": true
            },
            {
                "text": "Only steel-toed boots are required for all electrical work",
                "isCorrect": false
            },
            {
                "text": "No PPE is needed if the circuit is rated below 50 volts",
                "isCorrect": false
            },
            {
                "text": "A full face shield is the only requirement for low-voltage work",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 268
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazards-Safety Practices",
        "topic": "Grounding",
        "text": "Why is it critical to ground yourself before working on sensitive avionics equipment?",
        "options": [
            {
                "text": "To equalize the electrical potential between your body and the equipment, preventing electrostatic discharge (ESD) that can damage components",
                "isCorrect": true
            },
            {
                "text": "Grounding increases your body's resistance to prevent electrical shock",
                "isCorrect": false
            },
            {
                "text": "Grounding is only required when working outdoors during thunderstorms",
                "isCorrect": false
            },
            {
                "text": "Grounding prevents the equipment from powering on accidentally",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 269
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazards-Safety Practices",
        "topic": "Confined Space",
        "text": "Before entering a confined space on an aircraft (such as a fuel tank), what safety precautions are mandatory?",
        "options": [
            {
                "text": "Atmospheric testing for oxygen levels and hazardous vapors, a standby person outside, ventilation, and a rescue plan",
                "isCorrect": true
            },
            {
                "text": "Only a flashlight and basic hand tools are needed",
                "isCorrect": false
            },
            {
                "text": "Simply opening the access panel provides adequate ventilation",
                "isCorrect": false
            },
            {
                "text": "Confined space entry requires no special procedures if the tank has been drained",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 316
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazards-Safety Practices",
        "topic": "Eye Wash Station",
        "text": "If a chemical splashes into a technician's eyes, how long should they flush their eyes at an emergency eye wash station?",
        "options": [
            {
                "text": "At least 15 minutes with clean water, keeping eyelids open, then seek medical attention immediately",
                "isCorrect": true
            },
            {
                "text": "30 seconds is sufficient for most chemical exposures",
                "isCorrect": false
            },
            {
                "text": "Do not use water \u2014 apply a neutralizing solution to the eyes first",
                "isCorrect": false
            },
            {
                "text": "Flushing is only needed if the chemical causes immediate pain",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 276
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazards-Safety Practices",
        "topic": "Hearing Protection",
        "text": "At what noise level (in decibels) is hearing protection required in an aircraft maintenance environment?",
        "options": [
            {
                "text": "85 dB or above \u2014 prolonged exposure at this level causes permanent hearing damage",
                "isCorrect": true
            },
            {
                "text": "120 dB \u2014 hearing protection is only needed near jet engine run-ups",
                "isCorrect": false
            },
            {
                "text": "60 dB \u2014 equivalent to normal conversation",
                "isCorrect": false
            },
            {
                "text": "Hearing protection is recommended but never mandatory in aviation maintenance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 266
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazardous Materials Handling",
        "topic": "SDS/MSDS",
        "text": "What critical information does a Safety Data Sheet (SDS) provide about a hazardous material?",
        "options": [
            {
                "text": "Chemical composition, health hazards, safe handling procedures, required PPE, first aid measures, and spill/disposal instructions",
                "isCorrect": true
            },
            {
                "text": "Only the material's purchase price and vendor contact information",
                "isCorrect": false
            },
            {
                "text": "The aircraft models the material is approved for use on",
                "isCorrect": false
            },
            {
                "text": "The employee training schedule for handling the material",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 275
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazardous Materials Handling",
        "topic": "Solvents",
        "text": "When using solvents to clean aircraft components, what is the primary safety concern?",
        "options": [
            {
                "text": "Adequate ventilation is required because solvent vapors can be toxic if inhaled and many are flammable",
                "isCorrect": true
            },
            {
                "text": "Solvents are completely safe if used with bare hands",
                "isCorrect": false
            },
            {
                "text": "The only concern is preventing the solvent from staining the aircraft paint",
                "isCorrect": false
            },
            {
                "text": "Solvents should be heated before use to improve their cleaning effectiveness",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 266
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazardous Materials Handling",
        "topic": "Spill Response",
        "text": "If hydraulic fluid (Skydrol) spills on the hangar floor during maintenance, what is the correct response?",
        "options": [
            {
                "text": "Contain the spill immediately with absorbent materials, wear appropriate PPE (gloves and eye protection), and dispose of contaminated materials according to local regulations",
                "isCorrect": true
            },
            {
                "text": "Wash it down the drain with water \u2014 hydraulic fluid is non-toxic",
                "isCorrect": false
            },
            {
                "text": "Leave it to evaporate naturally; Skydrol dries quickly",
                "isCorrect": false
            },
            {
                "text": "Sweep it outside the hangar and let it soak into the ground",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 277
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazardous Materials Handling",
        "topic": "Fuel Handling",
        "text": "Why must aircraft fuel handling operations maintain bonding and grounding connections?",
        "options": [
            {
                "text": "To prevent static electricity buildup that could create a spark and ignite fuel vapors during fueling or defueling",
                "isCorrect": true
            },
            {
                "text": "Bonding wires measure the fuel flow rate during fueling operations",
                "isCorrect": false
            },
            {
                "text": "Grounding prevents the fuel from becoming contaminated with metal particles",
                "isCorrect": false
            },
            {
                "text": "Bonding is only required when fueling in wet weather conditions",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 262
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazardous Materials Handling",
        "topic": "Chemical Storage",
        "text": "What is a key requirement for storing flammable chemicals in an aircraft maintenance facility?",
        "options": [
            {
                "text": "Store in approved flammable storage cabinets away from ignition sources, with proper labeling and limited quantities per cabinet",
                "isCorrect": true
            },
            {
                "text": "Any metal cabinet can be used for flammable storage as long as the door closes",
                "isCorrect": false
            },
            {
                "text": "Flammable chemicals can be stored anywhere as long as they are in their original containers",
                "isCorrect": false
            },
            {
                "text": "Store flammable chemicals next to the eye wash station for quick access in emergencies",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 181
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazardous Materials Handling",
        "topic": "Battery Acid",
        "text": "Lead-acid aircraft batteries contain sulfuric acid. What should be done if battery acid contacts skin?",
        "options": [
            {
                "text": "Immediately flush the affected area with large amounts of clean water for at least 15 minutes, then seek medical attention",
                "isCorrect": true
            },
            {
                "text": "Wipe it off with a dry cloth \u2014 sulfuric acid is only harmful if swallowed",
                "isCorrect": false
            },
            {
                "text": "Apply petroleum jelly to neutralize the acid",
                "isCorrect": false
            },
            {
                "text": "No action is needed \u2014 dilute battery acid is harmless to skin",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 188
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Hazardous Materials Handling",
        "topic": "Composite Materials",
        "text": "What hazard is associated with sanding or grinding composite materials (carbon fiber, fiberglass) on aircraft?",
        "options": [
            {
                "text": "The dust particles are hazardous \u2014 they can cause respiratory irritation and skin itching; a respirator, gloves, and eye protection are required",
                "isCorrect": true
            },
            {
                "text": "Composite dust is completely harmless and requires no PPE",
                "isCorrect": false
            },
            {
                "text": "The only hazard is that the dust is electrically conductive and will short nearby circuits",
                "isCorrect": false
            },
            {
                "text": "Composite materials cannot be sanded \u2014 they must always be chemically stripped",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 262
    },
    {
        "subject": "II. General Safety Practices",
        "category": "FOD Prevention",
        "topic": "FOD Definition",
        "text": "What does FOD stand for in aviation maintenance, and why is it critical?",
        "options": [
            {
                "text": "Foreign Object Debris (or Damage) \u2014 loose items like tools, hardware, or debris can be ingested by engines or damage flight control surfaces",
                "isCorrect": true
            },
            {
                "text": "Flight Operations Directive \u2014 a mandatory safety instruction from the FAA",
                "isCorrect": false
            },
            {
                "text": "Fuel Over-Delivery \u2014 exceeding the maximum fuel capacity of an aircraft",
                "isCorrect": false
            },
            {
                "text": "Forced Operational Downtime \u2014 when an aircraft is grounded for maintenance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 375
    },
    {
        "subject": "II. General Safety Practices",
        "category": "FOD Prevention",
        "topic": "Tool Accountability",
        "text": "Why must all tools be accounted for before and after performing maintenance on an aircraft?",
        "options": [
            {
                "text": "A lost tool left inside the aircraft can cause FOD damage \u2014 it could jam controls, short wiring, or be ingested by an engine",
                "isCorrect": true
            },
            {
                "text": "Tool accountability is only for inventory management and preventing theft",
                "isCorrect": false
            },
            {
                "text": "Tools must be counted to calculate labor hours for billing purposes",
                "isCorrect": false
            },
            {
                "text": "Tool accountability is recommended but not required by any regulation",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 266
    },
    {
        "subject": "II. General Safety Practices",
        "category": "FOD Prevention",
        "topic": "FOD Walk",
        "text": "What is a 'FOD walk' and when is it performed?",
        "options": [
            {
                "text": "A systematic visual inspection of the ramp, taxiway, or runway by personnel walking in a line to find and remove debris before flight operations",
                "isCorrect": true
            },
            {
                "text": "A walk-around inspection of the aircraft performed by the pilot before takeoff",
                "isCorrect": false
            },
            {
                "text": "A mandatory physical fitness test for maintenance personnel",
                "isCorrect": false
            },
            {
                "text": "An inspection of the tool crib to verify all tools are properly stored",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 325
    },
    {
        "subject": "II. General Safety Practices",
        "category": "FOD Prevention",
        "topic": "Hardware Control",
        "text": "When removing screws, nuts, and bolts during maintenance, what is the best practice for FOD prevention?",
        "options": [
            {
                "text": "Place all removed hardware in a clearly labeled container immediately \u2014 never set loose hardware on aircraft surfaces or the floor",
                "isCorrect": true
            },
            {
                "text": "Leave hardware on the nearest flat surface of the aircraft for easy reinstallation",
                "isCorrect": false
            },
            {
                "text": "Put all hardware in your pockets to keep them close at hand",
                "isCorrect": false
            },
            {
                "text": "Hardware control is only necessary when working near engine intakes",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 371
    },
    {
        "subject": "II. General Safety Practices",
        "category": "FOD Prevention",
        "topic": "Personal Items",
        "text": "Which personal items are a common source of FOD and should be secured or removed before working on aircraft?",
        "options": [
            {
                "text": "Pens, badges, loose jewelry, hats, and personal phones \u2014 anything that could fall into an aircraft opening or engine intake",
                "isCorrect": true
            },
            {
                "text": "Only metal items are considered FOD hazards; plastic and fabric items are safe",
                "isCorrect": false
            },
            {
                "text": "Personal items are only a FOD concern when working on the flight deck",
                "isCorrect": false
            },
            {
                "text": "Safety glasses are the most common FOD item and should not be worn near aircraft",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 268
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Use Safety Devices",
        "topic": "Safety Wire",
        "text": "What is the purpose of safety wire (lockwire) on aircraft hardware?",
        "options": [
            {
                "text": "To prevent nuts, bolts, and fasteners from loosening due to vibration during flight by providing a positive locking mechanism",
                "isCorrect": true
            },
            {
                "text": "To provide an electrical ground path between metal components",
                "isCorrect": false
            },
            {
                "text": "To mark components that have been inspected and approved",
                "isCorrect": false
            },
            {
                "text": "Safety wire is decorative and serves no functional purpose on modern aircraft",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 371
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Use Safety Devices",
        "topic": "Safety Wire Direction",
        "text": "When installing safety wire, in which direction should the wire pull to prevent the fastener from loosening?",
        "options": [
            {
                "text": "The wire must be installed so that it pulls in the tightening direction \u2014 if the fastener tries to loosen, the wire resists it",
                "isCorrect": true
            },
            {
                "text": "The wire should pull in the loosening direction to act as a breakaway indicator",
                "isCorrect": false
            },
            {
                "text": "Direction does not matter as long as the wire is tight",
                "isCorrect": false
            },
            {
                "text": "The wire must always pull downward due to gravity effects during flight",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 372
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Use Safety Devices",
        "topic": "Cotter Pin",
        "text": "When is a cotter pin used instead of safety wire on aircraft?",
        "options": [
            {
                "text": "Cotter pins are used with castellated nuts on bolts \u2014 the pin passes through the bolt shank hole and the nut slots to prevent rotation",
                "isCorrect": true
            },
            {
                "text": "Cotter pins replace safety wire on all fasteners above 1/2 inch diameter",
                "isCorrect": false
            },
            {
                "text": "Cotter pins are only used on non-critical, non-structural components",
                "isCorrect": false
            },
            {
                "text": "Cotter pins are obsolete and no longer approved for use on aircraft",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 443
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Use Safety Devices",
        "topic": "Circuit Breaker Collar",
        "text": "What does a circuit breaker collar (or pin) indicate when installed on an aircraft circuit breaker?",
        "options": [
            {
                "text": "The circuit breaker has been intentionally disabled (pulled) and collared for maintenance \u2014 it must not be reset until maintenance is complete",
                "isCorrect": true
            },
            {
                "text": "The circuit breaker is functioning normally and has been recently tested",
                "isCorrect": false
            },
            {
                "text": "The circuit is rated for higher current than the standard breaker",
                "isCorrect": false
            },
            {
                "text": "The collar is an anti-theft device to prevent unauthorized removal of the breaker",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 189
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Use Safety Devices",
        "topic": "Wheel Chocks",
        "text": "When must wheel chocks be placed on an aircraft?",
        "options": [
            {
                "text": "Whenever the aircraft is parked and the parking brake alone cannot be relied upon \u2014 chocks prevent unintended aircraft movement",
                "isCorrect": true
            },
            {
                "text": "Only when the aircraft is parked on a slope greater than 5 degrees",
                "isCorrect": false
            },
            {
                "text": "Chocks are only required for aircraft weighing over 50,000 pounds",
                "isCorrect": false
            },
            {
                "text": "Wheel chocks are optional if the parking brake is set",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 28
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Aircraft Handling and Safety",
        "topic": "Taxi Signals",
        "text": "When marshalling an aircraft on the ramp, what signal does a marshaller give to indicate 'stop'?",
        "options": [
            {
                "text": "Arms extended outward and upward, then crossed above the head repeatedly",
                "isCorrect": true
            },
            {
                "text": "Both arms waving forward in a beckoning motion",
                "isCorrect": false
            },
            {
                "text": "One arm pointing toward the ground in a circular motion",
                "isCorrect": false
            },
            {
                "text": "Both arms held straight down at the sides with palms facing rearward",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 82
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Aircraft Handling and Safety",
        "topic": "Towing Safety",
        "text": "What is the most important safety precaution when towing an aircraft?",
        "options": [
            {
                "text": "A qualified person must be in the cockpit to operate brakes in case of emergency, and wing walkers must be positioned at each wing tip",
                "isCorrect": true
            },
            {
                "text": "The aircraft can be towed by one person as long as the tow bar is properly connected",
                "isCorrect": false
            },
            {
                "text": "Towing speed should be as fast as possible to minimize time on the taxiway",
                "isCorrect": false
            },
            {
                "text": "Wing walkers are only required when towing at night",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 434
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Aircraft Handling and Safety",
        "topic": "Jet Blast Zones",
        "text": "Why must maintenance personnel stay clear of jet engine intake and exhaust areas?",
        "options": [
            {
                "text": "Engine intake can create suction strong enough to pull a person in, and exhaust blast can cause severe burns, hearing damage, or physical displacement",
                "isCorrect": true
            },
            {
                "text": "The intake and exhaust areas are only dangerous during takeoff power settings",
                "isCorrect": false
            },
            {
                "text": "The danger zone only extends 5 feet from the engine at idle",
                "isCorrect": false
            },
            {
                "text": "Jet engines are safe to approach from any direction when at idle power",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 259
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Aircraft Handling and Safety",
        "topic": "Jacking Aircraft",
        "text": "What critical check must be performed before jacking an aircraft?",
        "options": [
            {
                "text": "Verify the aircraft weight is within jack capacity, ensure the area is clear of obstructions, and position jacks at the manufacturer's designated jack points",
                "isCorrect": true
            },
            {
                "text": "Only check that the tires are deflated before raising the aircraft",
                "isCorrect": false
            },
            {
                "text": "Jacking can be done at any location under the fuselage as long as the surface is flat",
                "isCorrect": false
            },
            {
                "text": "No checks are needed if the aircraft has been jacked before at the same location",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 11
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Aircraft Handling and Safety",
        "topic": "Propeller Safety",
        "text": "Why should a propeller always be treated as if the engine could start at any time?",
        "options": [
            {
                "text": "A magneto-equipped engine can fire if the propeller is moved and the magneto switch is hot or malfunctioning \u2014 always treat the prop as 'live'",
                "isCorrect": true
            },
            {
                "text": "Propellers are only dangerous during engine start and can be freely moved otherwise",
                "isCorrect": false
            },
            {
                "text": "Modern aircraft have safety interlocks that prevent accidental starts, so no precaution is needed",
                "isCorrect": false
            },
            {
                "text": "Propellers can only cause injury if the engine is running above 1,000 RPM",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 266
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Aircraft Handling and Safety",
        "topic": "Fueling Safety",
        "text": "What type of fuel must NEVER be used in a turbine (jet) engine aircraft that requires Jet-A?",
        "options": [
            {
                "text": "AVGAS (100LL) \u2014 aviation gasoline contains tetraethyl lead which damages turbine engine hot-section components and can cause engine failure",
                "isCorrect": true
            },
            {
                "text": "Jet-A1 \u2014 it has a different flash point than Jet-A and is incompatible",
                "isCorrect": false
            },
            {
                "text": "Any fuel can be used in turbine engines as long as it is aviation-rated",
                "isCorrect": false
            },
            {
                "text": "Diesel fuel \u2014 although chemically similar to Jet-A, it is strictly prohibited",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 286
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Aircraft Handling and Safety",
        "topic": "Tire Safety",
        "text": "Why is it dangerous to stand directly in front of or behind an aircraft tire during inflation?",
        "options": [
            {
                "text": "If the tire or wheel assembly fails during inflation, it can explode with lethal force \u2014 always inflate from the side using a remote gauge and cage if available",
                "isCorrect": true
            },
            {
                "text": "Tires release toxic fumes during inflation that are harmful if inhaled directly",
                "isCorrect": false
            },
            {
                "text": "Standing behind the tire increases the risk of slipping on hydraulic fluid",
                "isCorrect": false
            },
            {
                "text": "There is no safety concern \u2014 aircraft tires are designed to never fail during inflation",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 359
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Aircraft Handling and Safety",
        "topic": "Mooring",
        "text": "What is the purpose of mooring (tying down) an aircraft?",
        "options": [
            {
                "text": "To secure the aircraft against movement caused by wind, preventing structural damage or uncontrolled rolling",
                "isCorrect": true
            },
            {
                "text": "Mooring is only required during hurricanes or severe weather warnings",
                "isCorrect": false
            },
            {
                "text": "Tying down prevents fuel from sloshing inside the tanks",
                "isCorrect": false
            },
            {
                "text": "Mooring is optional for aircraft weighing more than 10,000 pounds",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 432
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Aircraft Handling and Safety",
        "topic": "Ground Power Unit",
        "text": "Before connecting a ground power unit (GPU) to an aircraft, what must be verified?",
        "options": [
            {
                "text": "The GPU voltage, frequency, and polarity must match the aircraft requirements \u2014 incorrect power can damage electrical systems and avionics",
                "isCorrect": true
            },
            {
                "text": "Only check that the GPU cable reaches the aircraft receptacle",
                "isCorrect": false
            },
            {
                "text": "GPUs are universal and work with any aircraft without verification",
                "isCorrect": false
            },
            {
                "text": "Only the GPU fuel level needs to be checked before connecting",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 438
    },
    {
        "subject": "II. General Safety Practices",
        "category": "Aircraft Handling and Safety",
        "topic": "Intake/Exhaust Covers",
        "text": "Why are protective covers (intake plugs, pitot covers, exhaust covers) installed on a parked aircraft?",
        "options": [
            {
                "text": "To prevent FOD, moisture, insects, and nesting animals from entering engines, pitot tubes, and other openings that could cause system malfunctions",
                "isCorrect": true
            },
            {
                "text": "Covers are only for cosmetic purposes to keep the aircraft looking clean",
                "isCorrect": false
            },
            {
                "text": "Protective covers are only required when the aircraft will be parked for more than 30 days",
                "isCorrect": false
            },
            {
                "text": "Covers are used to indicate the aircraft is unserviceable and should not be flown",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 261
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Use Common Tools",
        "topic": "Torque Wrench",
        "text": "Why is a torque wrench used instead of a standard wrench when tightening aircraft fasteners?",
        "options": [
            {
                "text": "A torque wrench applies a precise, measurable amount of force to prevent under-tightening (loose connection) or over-tightening (stripped threads or cracked parts)",
                "isCorrect": true
            },
            {
                "text": "Torque wrenches are faster than standard wrenches and save time",
                "isCorrect": false
            },
            {
                "text": "Standard wrenches cannot fit aircraft fasteners due to their unique head shapes",
                "isCorrect": false
            },
            {
                "text": "Torque wrenches are only required for engine components, not airframe fasteners",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 266
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Use Common Tools",
        "topic": "Wire Strippers",
        "text": "What can happen if the wrong size wire stripper is used on an aircraft wire?",
        "options": [
            {
                "text": "If too small, it can nick or cut conductor strands, weakening the wire and creating a potential failure point under vibration",
                "isCorrect": true
            },
            {
                "text": "Using the wrong size only affects the appearance, not the wire's electrical properties",
                "isCorrect": false
            },
            {
                "text": "Wire strippers are universal and one size works for all wire gauges",
                "isCorrect": false
            },
            {
                "text": "The wrong size stripper will remove too much insulation but won't damage the conductor",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 232
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Use Common Tools",
        "topic": "Crimping Tool",
        "text": "When crimping a terminal onto an aircraft wire, why must a calibrated crimping tool be used?",
        "options": [
            {
                "text": "A calibrated tool applies the correct compression to ensure a gas-tight, mechanically secure, and electrically reliable connection",
                "isCorrect": true
            },
            {
                "text": "Regular pliers provide an equally reliable crimp as a dedicated crimping tool",
                "isCorrect": false
            },
            {
                "text": "Calibration is only required for crimps on wires larger than 10 AWG",
                "isCorrect": false
            },
            {
                "text": "The crimping tool is only needed for appearance \u2014 solder provides the actual electrical connection",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 361
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Use Common Tools",
        "topic": "Soldering Iron",
        "text": "When soldering a connection on an aircraft electronic component, what type of solder should be used?",
        "options": [
            {
                "text": "Rosin-core solder \u2014 acid-core solder must never be used in electronics because acid flux causes corrosion that leads to connection failure",
                "isCorrect": true
            },
            {
                "text": "Acid-core solder because it creates a stronger bond than rosin-core",
                "isCorrect": false
            },
            {
                "text": "Any type of solder can be used as long as the connection looks shiny",
                "isCorrect": false
            },
            {
                "text": "Lead-free solder is prohibited in all aircraft applications",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 358
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Use Common Tools",
        "topic": "Drill Bits",
        "text": "When drilling into aircraft aluminum, why must the correct drill speed and feed rate be used?",
        "options": [
            {
                "text": "Too fast a speed generates excessive heat that can weaken the metal, and too much pressure can cause the drill to grab and enlarge the hole or crack the material",
                "isCorrect": true
            },
            {
                "text": "Drill speed doesn't matter for aluminum because it is a soft metal",
                "isCorrect": false
            },
            {
                "text": "Aircraft aluminum can only be drilled with diamond-tipped bits",
                "isCorrect": false
            },
            {
                "text": "High speed is always preferred to minimize the time the drill is in contact with the material",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 266
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Use Common Tools",
        "topic": "Tool Inspection",
        "text": "Before using any hand tool on an aircraft, what should a technician check?",
        "options": [
            {
                "text": "Verify the tool is in good condition \u2014 no cracks, mushroomed heads, worn jaws, or loose handles \u2014 and that it is the correct tool for the job",
                "isCorrect": true
            },
            {
                "text": "Only check that the tool is the right size; condition is not important",
                "isCorrect": false
            },
            {
                "text": "Tools only need inspection once per year during the annual tool audit",
                "isCorrect": false
            },
            {
                "text": "New tools never need inspection and can be used directly from the package",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 199
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Use Common Tools",
        "topic": "Safety Wire Pliers",
        "text": "What do safety wire pliers do that regular pliers cannot?",
        "options": [
            {
                "text": "They grip the wire and twist it uniformly with a pull-spin mechanism, creating consistent, tight twists required by aircraft maintenance standards",
                "isCorrect": true
            },
            {
                "text": "They cut safety wire to the exact length automatically",
                "isCorrect": false
            },
            {
                "text": "They measure the wire tension in pounds to verify it meets specifications",
                "isCorrect": false
            },
            {
                "text": "Regular pliers work identically \u2014 safety wire pliers are just a convenience",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 357
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Fiber Optics",
        "topic": "Fiber Optic Basics",
        "text": "How does a fiber optic cable transmit data differently than a copper wire?",
        "options": [
            {
                "text": "Fiber optic cables transmit data as pulses of light through a glass or plastic core, while copper wires transmit data as electrical signals",
                "isCorrect": true
            },
            {
                "text": "Fiber optic cables use radio waves instead of light for data transmission",
                "isCorrect": false
            },
            {
                "text": "Both fiber optic and copper transmit data electrically, but fiber uses higher voltage",
                "isCorrect": false
            },
            {
                "text": "Fiber optic cables transmit data using magnetic fields through a metallic core",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 70
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Fiber Optics",
        "topic": "Advantages",
        "text": "What is a major advantage of fiber optic cables over copper wiring in aircraft?",
        "options": [
            {
                "text": "Fiber optics are immune to electromagnetic interference (EMI), lighter in weight, and have much higher bandwidth than copper",
                "isCorrect": true
            },
            {
                "text": "Fiber optic cables are cheaper to manufacture than copper wires",
                "isCorrect": false
            },
            {
                "text": "Fiber optics can carry electrical power and data on the same cable",
                "isCorrect": false
            },
            {
                "text": "Copper wire is actually superior in every way \u2014 fiber optics are used only for cost savings",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 70
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Fiber Optics",
        "topic": "Total Internal Reflection",
        "text": "What principle allows light to travel through a curved fiber optic cable without escaping?",
        "options": [
            {
                "text": "Total internal reflection \u2014 light bounces off the boundary between the core and cladding, staying confined within the core",
                "isCorrect": true
            },
            {
                "text": "The cable uses mirrors at each bend to redirect the light",
                "isCorrect": false
            },
            {
                "text": "Light naturally follows curved paths due to its wave properties",
                "isCorrect": false
            },
            {
                "text": "The cable is filled with a special gas that guides the light around curves",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 26
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Fiber Optics",
        "topic": "Cable Structure",
        "text": "What are the three main layers of a fiber optic cable from inside to outside?",
        "options": [
            {
                "text": "Core (carries the light), cladding (reflects light back into core), and outer jacket (protects from physical damage)",
                "isCorrect": true
            },
            {
                "text": "Conductor, insulation, and shielding \u2014 the same as copper cables",
                "isCorrect": false
            },
            {
                "text": "Inner tube, vacuum layer, and armored shell",
                "isCorrect": false
            },
            {
                "text": "Glass rod, air gap, and rubber coating",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 232
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Fiber Optics",
        "topic": "Handling Precautions",
        "text": "Why must fiber optic cables be handled with greater care than copper wires?",
        "options": [
            {
                "text": "The glass core is fragile and can crack or break if bent beyond its minimum bend radius, causing signal loss or total failure",
                "isCorrect": true
            },
            {
                "text": "Fiber optic cables carry dangerously high voltages that can cause electrical shock",
                "isCorrect": false
            },
            {
                "text": "The light inside the cable can cause laser burns if the cable is broken",
                "isCorrect": false
            },
            {
                "text": "Fiber optic cables are actually more durable than copper and need no special handling",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 262
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Fiber Optics",
        "topic": "Connector Cleaning",
        "text": "What is the most common cause of signal loss in fiber optic connections?",
        "options": [
            {
                "text": "Dirt, dust, oil, or contamination on the fiber end-face at connectors \u2014 even microscopic particles can block or scatter the light signal",
                "isCorrect": true
            },
            {
                "text": "Electromagnetic interference from nearby copper wiring",
                "isCorrect": false
            },
            {
                "text": "Corrosion of the glass fiber due to moisture exposure",
                "isCorrect": false
            },
            {
                "text": "Temperature changes that melt the fiber core",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 26
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Fiber Optics",
        "topic": "Single vs Multi Mode",
        "text": "What is the difference between single-mode and multi-mode fiber optic cables?",
        "options": [
            {
                "text": "Single-mode has a smaller core and carries one light path for long distances; multi-mode has a larger core and carries multiple light paths for shorter distances",
                "isCorrect": true
            },
            {
                "text": "Single-mode carries one data channel while multi-mode carries multiple data channels simultaneously",
                "isCorrect": false
            },
            {
                "text": "Single-mode is for analog signals and multi-mode is for digital signals only",
                "isCorrect": false
            },
            {
                "text": "There is no practical difference \u2014 the terms are used interchangeably",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 26
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Fiber Optics",
        "topic": "Testing",
        "text": "What instrument is used to test a fiber optic cable for signal loss and locate faults?",
        "options": [
            {
                "text": "An Optical Time Domain Reflectometer (OTDR) \u2014 it sends light pulses into the fiber and analyzes reflections to find breaks, bends, and splices",
                "isCorrect": true
            },
            {
                "text": "A standard multimeter set to the resistance (ohms) function",
                "isCorrect": false
            },
            {
                "text": "An oscilloscope connected to both ends of the fiber",
                "isCorrect": false
            },
            {
                "text": "A megohmmeter (megger) to check insulation resistance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 64
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Antenna Systems / Radio Theory",
        "topic": "Antenna Function",
        "text": "What is the basic function of an antenna in an aircraft communication system?",
        "options": [
            {
                "text": "It converts electrical signals into electromagnetic waves for transmission, and electromagnetic waves back into electrical signals for reception",
                "isCorrect": true
            },
            {
                "text": "It amplifies the radio signal power before it leaves the transmitter",
                "isCorrect": false
            },
            {
                "text": "It filters out all frequencies except the one being used for communication",
                "isCorrect": false
            },
            {
                "text": "It stores radio signals in a buffer until the receiver is ready to process them",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 242
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Antenna Systems / Radio Theory",
        "topic": "Antenna Length",
        "text": "Why is the physical length of an antenna related to the wavelength of the frequency it is designed to receive?",
        "options": [
            {
                "text": "An antenna is most efficient when its length is a fraction (typically half or quarter) of the signal's wavelength, allowing it to resonate at that frequency",
                "isCorrect": true
            },
            {
                "text": "Antenna length has no relationship to frequency \u2014 any length works for any frequency",
                "isCorrect": false
            },
            {
                "text": "Longer antennas always receive higher frequencies better than shorter ones",
                "isCorrect": false
            },
            {
                "text": "The antenna must be exactly the same length as the full wavelength to function",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 82
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Antenna Systems / Radio Theory",
        "topic": "Transmission Line",
        "text": "What is the purpose of coaxial cable (transmission line) between an aircraft radio and its antenna?",
        "options": [
            {
                "text": "It carries the RF signal with minimal loss and shielding prevents interference \u2014 the cable's impedance must match the antenna and radio for maximum power transfer",
                "isCorrect": true
            },
            {
                "text": "Coaxial cable provides DC power to the antenna to keep it energized",
                "isCorrect": false
            },
            {
                "text": "Any type of wire can be used between the radio and antenna without signal loss",
                "isCorrect": false
            },
            {
                "text": "The coaxial cable amplifies the signal as it travels from the radio to the antenna",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 232
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Antenna Systems / Radio Theory",
        "topic": "VHF vs HF",
        "text": "Why do aircraft use VHF (Very High Frequency) radio for short-range communication and HF (High Frequency) for long-range?",
        "options": [
            {
                "text": "VHF signals travel line-of-sight and are blocked by the Earth's curvature; HF signals bounce off the ionosphere and can reach beyond the horizon",
                "isCorrect": true
            },
            {
                "text": "VHF has more power than HF, so it covers longer distances",
                "isCorrect": false
            },
            {
                "text": "HF is used for long range because it uses a higher frequency than VHF",
                "isCorrect": false
            },
            {
                "text": "VHF and HF have identical range capabilities \u2014 the choice is based on audio quality only",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 181
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Antenna Systems / Radio Theory",
        "topic": "SWR",
        "text": "What does a high Standing Wave Ratio (SWR) indicate in an aircraft antenna system?",
        "options": [
            {
                "text": "An impedance mismatch between the transmitter, transmission line, and antenna \u2014 RF energy is being reflected back instead of radiated, which can damage the transmitter",
                "isCorrect": true
            },
            {
                "text": "The antenna is receiving a very strong signal from a nearby ground station",
                "isCorrect": false
            },
            {
                "text": "The radio is operating at maximum power output as designed",
                "isCorrect": false
            },
            {
                "text": "High SWR is desirable and indicates optimal antenna performance",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 166
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Bridge Rectifier Advantage",
        "text": "Why is a bridge rectifier preferred over a half-wave rectifier in aircraft power supplies?",
        "options": [
            {
                "text": "A bridge rectifier uses both halves of the AC cycle, producing smoother DC output with less ripple and higher efficiency",
                "isCorrect": true
            },
            {
                "text": "A bridge rectifier is simpler because it uses fewer diodes",
                "isCorrect": false
            },
            {
                "text": "A half-wave rectifier produces a higher output voltage than a bridge rectifier",
                "isCorrect": false
            },
            {
                "text": "Bridge rectifiers work only with three-phase AC, while half-wave works with single-phase",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Zener Regulation",
        "text": "How does a Zener diode regulate voltage in a power supply circuit?",
        "options": [
            {
                "text": "When reverse-biased, a Zener diode maintains a constant voltage drop across itself once the input exceeds its Zener voltage, shunting excess current to ground",
                "isCorrect": true
            },
            {
                "text": "A Zener diode increases voltage by amplifying the input signal",
                "isCorrect": false
            },
            {
                "text": "It works like a fuse and blows open if the voltage is too high",
                "isCorrect": false
            },
            {
                "text": "A Zener diode converts AC to DC more efficiently than standard diodes",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 117
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply circuit / Rectifiers",
        "topic": "Ripple Voltage",
        "text": "What is 'ripple' in the output of a rectifier circuit, and why is it undesirable?",
        "options": [
            {
                "text": "Ripple is the residual AC component in the DC output \u2014 it causes noise, overheating, and malfunctions in sensitive electronic circuits that require pure DC",
                "isCorrect": true
            },
            {
                "text": "Ripple is a desirable AC component that helps regulate voltage",
                "isCorrect": false
            },
            {
                "text": "Ripple only occurs in three-phase rectifiers, not single-phase",
                "isCorrect": false
            },
            {
                "text": "Ripple is the physical vibration of the transformer core during operation",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 112
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "Capacitor Input Filter",
        "text": "In a power supply, a large capacitor is placed in parallel with the rectifier output. How does this reduce ripple?",
        "options": [
            {
                "text": "The capacitor charges during voltage peaks and discharges during voltage dips, filling in the gaps and smoothing the DC output",
                "isCorrect": true
            },
            {
                "text": "The capacitor blocks all AC and passes only DC due to its high reactance at 60 Hz",
                "isCorrect": false
            },
            {
                "text": "The capacitor converts remaining AC ripple into heat, which is dissipated by the case",
                "isCorrect": false
            },
            {
                "text": "The capacitor increases the output voltage to compensate for ripple losses",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 115
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Power Supply Circuit-Filters",
        "topic": "LC Filter",
        "text": "Why is an inductor (choke) added in series with the filter capacitor in some power supply designs?",
        "options": [
            {
                "text": "The inductor opposes rapid current changes and, combined with the capacitor, forms an LC filter that greatly reduces ripple for a cleaner DC output",
                "isCorrect": true
            },
            {
                "text": "The inductor increases the output voltage by storing energy in its magnetic field",
                "isCorrect": false
            },
            {
                "text": "The inductor protects the capacitor from overcurrent by limiting peak charging current",
                "isCorrect": false
            },
            {
                "text": "Inductors are only used in AC circuits and have no effect in DC power supplies",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 114
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "RL Time Constant",
        "text": "In an RL circuit, the time constant (\u03c4) determines how quickly current rises to its maximum value. How is it calculated?",
        "options": [
            {
                "text": "\u03c4 = L/R (inductance in henries divided by resistance in ohms), measured in seconds",
                "isCorrect": true
            },
            {
                "text": "\u03c4 = R \u00d7 L (resistance times inductance)",
                "isCorrect": false
            },
            {
                "text": "\u03c4 = R/L (resistance divided by inductance)",
                "isCorrect": false
            },
            {
                "text": "\u03c4 = 2\u03c0 \u00d7 L \u00d7 R (the same as inductive reactance)",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 145
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Inductors",
        "topic": "Back-EMF",
        "text": "What is back-EMF (counter-electromotive force) in an inductor, and why is it important?",
        "options": [
            {
                "text": "It is a voltage generated by the inductor that opposes any change in current \u2014 it can produce dangerously high voltage spikes when a circuit is suddenly opened",
                "isCorrect": true
            },
            {
                "text": "Back-EMF is the forward voltage that helps current flow through the inductor more easily",
                "isCorrect": false
            },
            {
                "text": "It is a DC offset voltage that appears across all inductors at all times",
                "isCorrect": false
            },
            {
                "text": "Back-EMF only occurs in transformers, not in single inductors",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 34
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Transformer Losses",
        "text": "What are the two main types of losses in a real (non-ideal) transformer?",
        "options": [
            {
                "text": "Copper losses (I\u00b2R heating in the windings) and core losses (hysteresis and eddy currents in the iron core)",
                "isCorrect": true
            },
            {
                "text": "Radiation losses and friction losses from the moving core",
                "isCorrect": false
            },
            {
                "text": "Capacitive losses and inductive losses in the air gap",
                "isCorrect": false
            },
            {
                "text": "Real transformers have no losses \u2014 they are 100% efficient by design",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 104
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Theory of Operation",
        "topic": "Autotransformer",
        "text": "How does an autotransformer differ from a standard two-winding transformer?",
        "options": [
            {
                "text": "An autotransformer uses a single winding with a tap, sharing part of the winding between primary and secondary \u2014 it is smaller and lighter but provides no electrical isolation",
                "isCorrect": true
            },
            {
                "text": "An autotransformer automatically adjusts its turns ratio based on the load",
                "isCorrect": false
            },
            {
                "text": "An autotransformer works with DC as well as AC",
                "isCorrect": false
            },
            {
                "text": "An autotransformer has three separate windings for three-phase operation",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 84
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Transformer / Fault Isolation",
        "topic": "Megger Test",
        "text": "When using a megohmmeter (megger) to test a transformer, what are you checking?",
        "options": [
            {
                "text": "Insulation resistance between windings and between windings and the core \u2014 low readings indicate insulation breakdown that could lead to shorts",
                "isCorrect": true
            },
            {
                "text": "The turns ratio of the primary to secondary winding",
                "isCorrect": false
            },
            {
                "text": "The output voltage under full load conditions",
                "isCorrect": false
            },
            {
                "text": "The frequency response of the transformer at various input frequencies",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 353
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Aircraft Wiring",
        "topic": "Wire Gauge Selection",
        "text": "What happens if a wire gauge too small for the current load is installed in an aircraft circuit?",
        "options": [
            {
                "text": "The wire overheats due to excessive resistance, potentially melting insulation, causing a fire, or creating a short circuit",
                "isCorrect": true
            },
            {
                "text": "The circuit operates normally but at a slightly lower voltage",
                "isCorrect": false
            },
            {
                "text": "The circuit breaker automatically compensates for undersized wire",
                "isCorrect": false
            },
            {
                "text": "Smaller wire actually handles more current because it has less material to heat up",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 262
    },
    {
        "subject": "III. Fundamentals of On Equipment Maintenance",
        "category": "Use Test Equipment / Special Tools",
        "topic": "Oscilloscope Use",
        "text": "What can an oscilloscope show that a standard multimeter cannot?",
        "options": [
            {
                "text": "The shape (waveform) of a signal over time \u2014 including frequency, amplitude, distortion, noise, and timing relationships",
                "isCorrect": true
            },
            {
                "text": "An oscilloscope can only measure DC voltage, not AC",
                "isCorrect": false
            },
            {
                "text": "A multimeter displays identical information to an oscilloscope in digital form",
                "isCorrect": false
            },
            {
                "text": "Oscilloscopes measure resistance more accurately than a multimeter",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 345
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Wave generation Circuits",
        "topic": "Crystal Oscillator",
        "text": "Why are crystal oscillators used in aircraft communication and navigation equipment?",
        "options": [
            {
                "text": "A quartz crystal vibrates at an extremely precise and stable frequency, ensuring accurate tuning and timing that does not drift with temperature changes",
                "isCorrect": true
            },
            {
                "text": "Crystals generate higher power output than LC oscillator circuits",
                "isCorrect": false
            },
            {
                "text": "Crystal oscillators can produce any frequency without needing to be changed",
                "isCorrect": false
            },
            {
                "text": "Crystals are used only for audio frequency generation, not radio frequencies",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 168
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Handling Electrostatic Devices",
        "topic": "ESD Wrist Strap",
        "text": "How does an ESD wrist strap protect sensitive electronic components?",
        "options": [
            {
                "text": "It continuously drains static charge from the technician's body to ground through a current-limiting resistor, preventing sudden electrostatic discharge to components",
                "isCorrect": true
            },
            {
                "text": "It insulates the technician from the workbench to prevent shock",
                "isCorrect": false
            },
            {
                "text": "The wrist strap stores static electricity in a built-in capacitor for later safe discharge",
                "isCorrect": false
            },
            {
                "text": "It only works when the technician is standing on a metal floor",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 33
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Identify & Perform Corrosion Control",
        "topic": "Dissimilar Metals",
        "text": "Why does galvanic corrosion occur when two dissimilar metals are in contact on an aircraft?",
        "options": [
            {
                "text": "In the presence of an electrolyte (moisture), the two metals form a galvanic cell \u2014 the more active (anodic) metal corrodes sacrificially while protecting the less active (cathodic) metal",
                "isCorrect": true
            },
            {
                "text": "Dissimilar metals generate heat at their junction, which accelerates oxidation",
                "isCorrect": false
            },
            {
                "text": "Galvanic corrosion only occurs when DC electrical current is deliberately applied",
                "isCorrect": false
            },
            {
                "text": "All metals corrode at the same rate regardless of what they are in contact with",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 316
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Troubleshooting",
        "topic": "Troubleshooting Process",
        "text": "What is the first step in troubleshooting a malfunctioning avionics circuit?",
        "options": [
            {
                "text": "Isolate the problem by verifying the symptoms, checking if the issue is ongoing or intermittent, and determining operating conditions when the fault occurs",
                "isCorrect": true
            },
            {
                "text": "Immediately replace the most expensive component in the circuit",
                "isCorrect": false
            },
            {
                "text": "Disconnect all wiring from the aircraft and test each wire individually",
                "isCorrect": false
            },
            {
                "text": "Apply maximum voltage to the circuit to force the fault to appear",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 117
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Troubleshooting",
        "topic": "Voltmeter Troubleshooting",
        "text": "When troubleshooting a circuit with zero output voltage, what is a logical first measurement to take?",
        "options": [
            {
                "text": "Check the input voltage with a voltmeter \u2014 if input voltage is present but output is zero, the fault is within the circuit between input and output",
                "isCorrect": true
            },
            {
                "text": "Measure the output current with an ammeter connected in parallel",
                "isCorrect": false
            },
            {
                "text": "Use an oscilloscope to measure the DC resistance of the load",
                "isCorrect": false
            },
            {
                "text": "Check the circuit breaker last, after testing all individual components",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 199
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Troubleshooting",
        "topic": "Open Circuit Fault",
        "text": "In a series circuit, a technician measures full source voltage across one resistor and zero volts across all others. What does this indicate?",
        "options": [
            {
                "text": "The resistor showing full voltage is open \u2014 in a series circuit, all source voltage appears across the open component because no current flows",
                "isCorrect": true
            },
            {
                "text": "The resistor is shorted, allowing all current to bypass it",
                "isCorrect": false
            },
            {
                "text": "The power supply is providing too much voltage to the circuit",
                "isCorrect": false
            },
            {
                "text": "All other resistors have failed simultaneously",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 342
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Troubleshooting",
        "topic": "Short Circuit Detection",
        "text": "A circuit breaker keeps tripping immediately after being reset. What is the most likely cause?",
        "options": [
            {
                "text": "A short circuit exists in the wiring or a component, causing excessive current that exceeds the breaker's rating",
                "isCorrect": true
            },
            {
                "text": "The circuit breaker itself is too large for the circuit",
                "isCorrect": false
            },
            {
                "text": "An open circuit is preventing current from flowing through the load",
                "isCorrect": false
            },
            {
                "text": "The battery voltage is too low to keep the breaker engaged",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 266
    },
    {
        "subject": "I. Introductory and General Requirements",
        "category": "Basic Circuit Troubleshooting",
        "topic": "Ohmmeter Safety",
        "text": "Why must circuit power be removed before using an ohmmeter to troubleshoot?",
        "options": [
            {
                "text": "An ohmmeter supplies its own internal voltage to measure resistance \u2014 applying external circuit power can give false readings and damage the meter",
                "isCorrect": true
            },
            {
                "text": "Ohmmeters only work on AC circuits, so DC power must be removed first",
                "isCorrect": false
            },
            {
                "text": "Power must be removed to allow the ohmmeter to measure voltage instead of resistance",
                "isCorrect": false
            },
            {
                "text": "There is no safety reason; it is simply a matter of convenience",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 199
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Technical Publications",
        "topic": "Schematic Diagrams",
        "text": "What is the primary purpose of a schematic diagram in aircraft electronics maintenance?",
        "options": [
            {
                "text": "To show an electrical system using standardized symbols rather than pictures, primarily used for troubleshooting circuit faults",
                "isCorrect": true
            },
            {
                "text": "To show the physical location of every component inside the aircraft",
                "isCorrect": false
            },
            {
                "text": "To provide a step-by-step installation procedure for new equipment",
                "isCorrect": false
            },
            {
                "text": "To display the aircraft's weight and balance data for flight planning",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 242
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Technical Publications",
        "topic": "Airworthiness Directives",
        "text": "What is the difference between a manufacturer's service bulletin and an FAA Airworthiness Directive (AD)?",
        "options": [
            {
                "text": "Service bulletins are recommendations from the manufacturer and are generally optional; Airworthiness Directives are mandatory FAA requirements that must be complied with",
                "isCorrect": true
            },
            {
                "text": "Both are optional suggestions that manufacturers provide for improved performance",
                "isCorrect": false
            },
            {
                "text": "Airworthiness Directives are issued by the manufacturer, while service bulletins come from the FAA",
                "isCorrect": false
            },
            {
                "text": "Service bulletins are mandatory, and Airworthiness Directives are optional guidelines",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 336
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Technical Publications",
        "topic": "Block Diagrams",
        "text": "How does a block diagram differ from a schematic diagram?",
        "options": [
            {
                "text": "A block diagram shows functional units as blocks with arrows indicating signal flow direction \u2014 it is a high-level overview, while a schematic shows individual component-level detail for troubleshooting",
                "isCorrect": true
            },
            {
                "text": "Block diagrams and schematic diagrams are identical and interchangeable",
                "isCorrect": false
            },
            {
                "text": "Block diagrams show physical component locations, while schematics show system functions",
                "isCorrect": false
            },
            {
                "text": "Block diagrams are only used for hydraulic systems, not electrical systems",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 425
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Technical Publications",
        "topic": "Wiring Diagrams",
        "text": "What information does an aircraft wiring diagram provide to a technician?",
        "options": [
            {
                "text": "It shows how components are connected together electrically \u2014 including wiring routes, connectors, terminal boards, and wire identification \u2014 used for troubleshooting and repair",
                "isCorrect": true
            },
            {
                "text": "It only shows the voltage at each point in the circuit under normal conditions",
                "isCorrect": false
            },
            {
                "text": "Wiring diagrams show mechanical assembly instructions for mounting equipment",
                "isCorrect": false
            },
            {
                "text": "They display only the wire colors and have no connection information",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 425
    },
    {
        "subject": "II. Common Maintenance Practices",
        "category": "Technical Publications",
        "topic": "MEL",
        "text": "What is a Minimum Equipment List (MEL) in aircraft operations?",
        "options": [
            {
                "text": "An FAA-approved list of instruments or equipment that may be inoperative while still allowing the aircraft to be operated safely under specific conditions",
                "isCorrect": true
            },
            {
                "text": "A list of the minimum tools a technician must carry to perform maintenance",
                "isCorrect": false
            },
            {
                "text": "A manufacturer's list of optional accessories that can be installed on the aircraft",
                "isCorrect": false
            },
            {
                "text": "A checklist used by the pilot before every takeoff that cannot be modified",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 20
    },
    {
        "subject": "IV. Aircraft Fundamentals",
        "category": "Aircraft Structures",
        "topic": "Forces of Flight",
        "text": "What are the four forces acting on an aircraft in flight?",
        "options": [
            {
                "text": "Lift (upward), Weight (downward), Thrust (forward), and Drag (backward) \u2014 lift must equal weight and thrust must equal drag for steady, level flight",
                "isCorrect": true
            },
            {
                "text": "Gravity, friction, acceleration, and centripetal force",
                "isCorrect": false
            },
            {
                "text": "Lift, torque, momentum, and compression",
                "isCorrect": false
            },
            {
                "text": "Thrust, drag, tension, and pressure",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 286
    },
    {
        "subject": "IV. Aircraft Fundamentals",
        "category": "Aircraft Structures",
        "topic": "Axes of Flight",
        "text": "An aircraft rolls to the left. Which axis of flight is involved, and what control surface causes this motion?",
        "options": [
            {
                "text": "The longitudinal axis (nose to tail) \u2014 ailerons on the trailing edges of the wings control roll",
                "isCorrect": true
            },
            {
                "text": "The lateral axis (wing tip to wing tip) \u2014 the elevator controls roll",
                "isCorrect": false
            },
            {
                "text": "The vertical axis (top to bottom) \u2014 the rudder controls roll",
                "isCorrect": false
            },
            {
                "text": "The horizontal axis \u2014 flaps control roll movement",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 433
    },
    {
        "subject": "IV. Aircraft Fundamentals",
        "category": "Aircraft Structures",
        "topic": "Fuselage Types",
        "text": "What is the most common type of fuselage construction used in modern aircraft?",
        "options": [
            {
                "text": "Semimonocoque \u2014 it derives its strength from internal structural members (bulkheads, longerons, stringers) combined with the stressed outer skin",
                "isCorrect": true
            },
            {
                "text": "Truss construction using welded steel tubes with fabric covering",
                "isCorrect": false
            },
            {
                "text": "True monocoque, which has no internal structure at all",
                "isCorrect": false
            },
            {
                "text": "Geodesic construction using interwoven basket-weave frames",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 316
    },
    {
        "subject": "IV. Aircraft Fundamentals",
        "category": "Aircraft Structures",
        "topic": "Empennage",
        "text": "What components make up the empennage of an aircraft?",
        "options": [
            {
                "text": "The tail section \u2014 including the vertical fin (stabilizer) with the rudder attached, and the horizontal stabilizer with the elevator attached",
                "isCorrect": true
            },
            {
                "text": "The wing root fairings and the main landing gear assemblies",
                "isCorrect": false
            },
            {
                "text": "The engine nacelles and propeller hub assemblies",
                "isCorrect": false
            },
            {
                "text": "The cockpit instrument panel and avionics bay",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 290
    },
    {
        "subject": "IV. Aircraft Fundamentals",
        "category": "Aircraft Structures",
        "topic": "Center of Gravity",
        "text": "Why is the center of gravity (CG) critical to safe aircraft operation?",
        "options": [
            {
                "text": "The CG is the point where all weight is concentrated \u2014 if it falls outside the allowable range, the aircraft becomes uncontrollable because the tail surfaces cannot maintain proper pitch balance",
                "isCorrect": true
            },
            {
                "text": "The CG only matters during ground operations, not in flight",
                "isCorrect": false
            },
            {
                "text": "CG position determines the aircraft's maximum speed but not its stability",
                "isCorrect": false
            },
            {
                "text": "The CG is only relevant for cargo aircraft, not passenger planes",
                "isCorrect": false
            }
        ],
        "studyGuidePage": 434
    }
];
