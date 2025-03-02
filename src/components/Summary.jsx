export default function Summary({ items }) {
  if (items.length === 0) {
    return (
      <footer className="summary">
        Alışveriş listenizi hazırlamaya başlayabilirsiniz.
      </footer>
    );
  }
  const itemsCount = items.length;
  const complatedItemsCount = items.filter((item) => item.completed).length;

  return (
    <footer className="summary">
      {itemsCount === complatedItemsCount ? (
        <p>Alışverişinizi tamamladınız.</p>
      ) : (
        <p>
          Alışveriş listenizdeki {itemsCount} üründen {complatedItemsCount}{" "}
          tanesini aldınız.
        </p>
      )}
    </footer>
  );
}
