function searchFactory() {
    return {
        selects : {
            'sexe': [
                {
                    name: 'sexe',
                    value: '',
                },
                {
                    name: 'Femme',
                    value: true,
                },
                {
                    name: 'Homme',
                    value: false,
                }
                    ],
            'convenant': [
                {
                    name: 'Souhaite une relation',
                    value: '',
                },
                {
                    name: 'Prêt(e) à s\'engager',
                    value: 'Souhaites s\'engager'
                },
                {
                    name: 'Ne veut pas s\'engager',
                    value: 'Ne veut pas'
                },
                {
                    name: 'Souhaite une relation',
                    value: 'Souhaite une relation'
                },
                {
                    name: 'Laisse faire le hasard',
                    value: 'Laisse faire le hasard'
                }
                        ],
            married: [
                {
                    name: 'Est marié(e)',
                    value: '',
                },
                {
                    name: 'Jamais mariée',
                    value: 'Jamais mariée',
                },
                {
                    name: 'Séparée',
                    value: 'Séparée',
                },
                {
                    name: 'Divorcée',
                    value: 'Divorcée',
                },
                {
                    name: 'Veuf',
                    value: 'Veuf',
                },
                {
                    name: 'Mariée',
                    value: 'Mariée',
                }
                    ],
            children: [
                {
                    name: 'Est parent ?',
                    value: '',
                },
                {
                    name: 'A des enfants',
                    value: 'A des enfants',
                },
                {
                    name: 'N\'a pas d\'enfants',
                    value: 'N\'a pas d\'enfants',
                }
                    ],
            wantChildren: [
                {
                    name: 'A envie d\'enfants ?',
                    value: '',
                },
                {
                    name: 'Veux des enfants',
                    value: 'En veux',
                },
                {
                    name: 'Ne veux pas d\'enfants',
                    value: 'En veux',
                },
                {
                    name: 'Ne sais pas encore',
                    value: 'Ne sais pas encore',
                }
                    ],
            height: [
                {
                    name: 'Sa taille ?',
                    value: '',
                },
                {
                    name: 'Plus de 200cm',
                    value: '+200',
                },
                {
                    name: '180 à 200 cm',
                    value: '180-200',
                },
                {
                    name: 'de 170 à 180 cm',
                    value: '170-180',
                },
                {
                    name: 'de 150 à 170 cm',
                    value: '150-170',
                },
                {
                    name: 'Nain',
                    value: 'Nain',
                }
                    ],
            weight: [
                {
                    name: 'Son poids ?',
                    value: '',
                },
                {
                    name: 'Moins de 50',
                    value: '-50',
                },
                {
                    name: '50-60',
                    value: '50-60',
                },
                {
                    name: '60-70',
                    value: '60-70',
                },
                {
                    name: '70-80',
                    value: '70-80',
                },
                {
                    name: '80-90',
                    value: '80-90',
                },
                {
                    name: '90-100',
                    value: '90-100',
                },
                {
                    name: 'Plus de 100',
                    value: '+100',
                },
                {
                    name: 'It\'s over 9000',
                    value: '+9000',
                }
                    ],
            hairLenght: [
                {
                    name: 'Longueur de ses cheveux',
                    value: '',
                },
                {
                    name: 'Je marche dessus',
                    value: 'De la moquette',
                },
                {
                    name: 'Hyper longs',
                    value: 'Hyper longs',
                },
                {
                    name: 'Longs',
                    value: 'Longs',
                },
                {
                    name: 'Moyens',
                    value: 'Moyens',
                },
                {
                    name: 'Courts',
                    value: 'Courts',
                },
                {
                    name: 'Très courts',
                    value: 'Très courts',
                },
                {
                    name: 'Rasé',
                    value: 'Rasé',
                },
                {
                    name: 'Vous avez-dit cheveux ?',
                    value: 'Aucun',
                }
                    ],
            hairColor: [
                {
                    name: 'La couleur de ses cheveux ?',
                    value: '',
                },
                {
                    name: 'Rosé pamplemouse',
                    value: 'Roses',
                },
                {
                    name: 'Vert dur',
                    value: 'Verts',
                },
                {
                    name: 'Blond surfeur',
                    value: 'Blonds',
                },
                {
                    name: 'Blancs en neige',
                    value: 'Blancs',
                },
                {
                    name: 'Bleus chataîn',
                    value: 'Bleus',
                },
                {
                    name: 'Gris taupe-provenciale',
                    value: 'Gris',
                },
                {
                    name: 'Verts de macédoine',
                    value: 'Verts',
                },
                {
                    name: 'Bruns terre de sienne',
                    value: 'Bruns',
                },
                {
                    name: 'Propres',
                    value: 'Propres',
                },
                {
                    name: 'Stéphanie de Monaco',
                    value: 'Stéphanie',
                }
                    ],
            origin: [
                {
                    name: 'd\'origines',
                    value: '',
                },
                {
                    name: 'Basque',
                    value: 'Basque',
                },
                {
                    name: 'Bretonne',
                    value: 'Breton',
                },
                {
                    name: 'Germanique',
                    value: 'Germanique',
                },
                {
                    name: 'Romane',
                    value: 'Romane',
                },
                {
                    name: 'Navarroise',
                    value: 'Navarroise',
                },
                {
                    name: 'Occitano-catalane',
                    value: 'Occitano-catalane',
                },
                {
                    name: 'Gallo-italique',
                    value: 'Gallo-italique',
                },
                {
                    name: 'Polynésienne',
                    value: 'Polynésienne',
                },
                {
                    name: 'Créole',
                    value: 'Créole',
                }
                    ],
        }
    };
}