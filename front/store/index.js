export const state = () => ({
  counter: 0,
  discounts: [
    {
      description: `Im Gegensatz zu der in Deutschland und der Schweiz weit verbreiteten Pfefferminze stammt die Minze für den Moroccan Mint von Sirocca aus Marokko. Die so genannte Nanaminze ist eine natürliche Varietät der Grünen Minze (engl. "Spearmint") und wesentlich milder und süsslicher im Geschmack. Die Minze enthält kein Menthol und ist daher auch für Geniesser mit empfindlichem Magen zu empfehlen. Die Minze wirkt sehr durstlöschend und das lang anhaltende Aroma ist ein wahrer Genuss.
        Erst ganz wenige Mengen reiner marokkanischer Minze werden überhaupt exportiert – und entsprechend gering fallen die Mengen an verfügbarer biologischer Minze aus. Um die verfügbare Menge zu erhöhen, baut Sirocco mittlerweile selbst marokkanische Minze in nachhaltiger Qualität an.`,
      discount: '7%',
      priceDiscounted: 16.0,
      priceOriginal: 17.2
    }
  ]
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
